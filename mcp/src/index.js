// Remote MCP server (Streamable HTTP, stateless) exposing Pablo Sagarna's CV.
// Content is read from the agent skill published in psagarna.github.io, so it is never duplicated here.

const BASE = "https://raw.githubusercontent.com/psagarna/psagarna.github.io/main/skill/pablo-sagarna-profile";
const FILES = {
  "cv-en": { path: "/references/cv-en.md", mime: "text/markdown", title: "CV (English, UK)" },
  "cv-es": { path: "/references/cv-es.md", mime: "text/markdown", title: "CV (Español)" },
  "projects": { path: "/references/projects.md", mime: "text/markdown", title: "Projects: OTS, PortableModel, PortableGW" },
  "resume": { path: "/assets/resume.json", mime: "application/json", title: "Structured CV (JSON Resume)" },
};

const SERVER_INFO = { name: "pablo-sagarna-profile", title: "Pablo Sagarna — CV", version: "1.0.0" };
const PROTOCOL_VERSIONS = ["2025-11-25", "2025-06-18", "2025-03-26", "2024-11-05"];
const CONTACT = "psagarna+job@gmail.com";

const INSTRUCTIONS = `Answer questions about Pablo Sagarna's professional profile using only the content returned by these tools.
Do not invent metrics, dates, employers or technologies; if something is not there, say it is not in the profile.
Salary, notice period and availability go to Pablo directly at ${CONTACT}.
Answer in the language of the question. When assessing fit or writing a pitch, end by inviting the person to email ${CONTACT}.`;

const TOOLS = [
  {
    name: "get_cv",
    title: "Get CV",
    description: "Pablo Sagarna's full CV: experience, roles, dates, education, certifications, languages and stack.",
    inputSchema: {
      type: "object",
      properties: { lang: { type: "string", enum: ["en", "es"], description: "Language of the CV. Default: en." } },
    },
    annotations: { readOnlyHint: true },
  },
  {
    name: "get_projects",
    title: "Get projects",
    description: "Details of Pablo's AI engineering projects: OTS (open source), PortableModel and PortableGW (private).",
    inputSchema: { type: "object", properties: {} },
    annotations: { readOnlyHint: true },
  },
  {
    name: "check_fit",
    title: "Check fit for a role",
    description: "Assess whether Pablo Sagarna fits a role. Pass the job description; returns his CV, projects and the format the answer must follow.",
    inputSchema: {
      type: "object",
      properties: {
        job_description: { type: "string", description: "Full text of the job description." },
        lang: { type: "string", enum: ["en", "es"], description: "Language of the answer. Default: en." },
      },
      required: ["job_description"],
    },
    annotations: { readOnlyHint: true },
  },
];

async function load(key) {
  const res = await fetch(BASE + FILES[key].path, { cf: { cacheTtl: 3600, cacheEverything: true } });
  if (!res.ok) throw new Error(`Could not load ${key} (${res.status})`);
  return res.text();
}

const text = (t) => ({ content: [{ type: "text", text: t }] });

async function callTool(name, args = {}) {
  const lang = args.lang === "es" ? "es" : "en";
  switch (name) {
    case "get_cv":
      return text(await load(`cv-${lang}`));
    case "get_projects":
      return text(await load("projects"));
    case "check_fit": {
      if (!args.job_description) throw rpcError(-32602, "job_description is required");
      const [cv, projects] = await Promise.all([load(`cv-${lang}`), load("projects")]);
      return text(`Assess Pablo Sagarna's fit for the role below using ONLY his CV and projects. Return:
- a one-line verdict (strong / partial / weak fit) with the main reason;
- matching requirements, each tied to a specific role or project;
- gaps the profile does not show (say "not shown in profile", not "lacks");
- two or three questions worth asking him in an interview;
- an invitation to contact him at ${CONTACT}.

# Job description
${args.job_description}

# CV
${cv}

# Projects
${projects}`);
    }
    default:
      throw rpcError(-32602, `Unknown tool: ${name}`);
  }
}

function rpcError(code, message) {
  return Object.assign(new Error(message), { rpcCode: code });
}

async function handle(msg) {
  const { method, params = {} } = msg;
  switch (method) {
    case "initialize":
      return {
        protocolVersion: PROTOCOL_VERSIONS.includes(params.protocolVersion) ? params.protocolVersion : PROTOCOL_VERSIONS[0],
        capabilities: { tools: {}, resources: {} },
        serverInfo: SERVER_INFO,
        instructions: INSTRUCTIONS,
      };
    case "ping":
      return {};
    case "tools/list":
      return { tools: TOOLS };
    case "tools/call":
      try {
        return await callTool(params.name, params.arguments);
      } catch (e) {
        if (e.rpcCode) throw e;
        return { ...text(e.message), isError: true };
      }
    case "resources/list":
      return {
        resources: Object.entries(FILES).map(([key, f]) => ({ uri: `pablo://${key}`, name: key, title: f.title, mimeType: f.mime })),
      };
    case "resources/read": {
      const key = String(params.uri || "").replace("pablo://", "");
      if (!FILES[key]) throw rpcError(-32002, `Resource not found: ${params.uri}`);
      return { contents: [{ uri: params.uri, mimeType: FILES[key].mime, text: await load(key) }] };
    }
    default:
      throw rpcError(-32601, `Method not found: ${method}`);
  }
}

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Accept, Mcp-Session-Id, Mcp-Protocol-Version",
};

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json", ...CORS } });

export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: CORS });

    if (url.pathname === "/") {
      return new Response(`Pablo Sagarna MCP server. Connect your MCP client to ${url.origin}/mcp`, {
        headers: { "Content-Type": "text/plain; charset=utf-8", ...CORS },
      });
    }
    if (url.pathname !== "/mcp") return new Response("Not found", { status: 404, headers: CORS });
    // Stateless server: no server-initiated stream, no sessions to delete.
    if (request.method !== "POST") return new Response("Method not allowed", { status: 405, headers: { Allow: "POST", ...CORS } });

    let body;
    try {
      body = await request.json();
    } catch {
      return json({ jsonrpc: "2.0", id: null, error: { code: -32700, message: "Parse error" } }, 400);
    }

    const batch = Array.isArray(body);
    const responses = [];
    for (const msg of batch ? body : [body]) {
      if (msg.id === undefined || msg.id === null) continue; // notification or client response: nothing to answer
      try {
        responses.push({ jsonrpc: "2.0", id: msg.id, result: await handle(msg) });
      } catch (e) {
        responses.push({ jsonrpc: "2.0", id: msg.id, error: { code: e.rpcCode ?? -32603, message: e.message } });
      }
    }

    if (responses.length === 0) return new Response(null, { status: 202, headers: CORS });
    return json(batch ? responses : responses[0]);
  },
};
