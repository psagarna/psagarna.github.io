# Pablo Sagarna — MCP server

Remote MCP server (Streamable HTTP) that lets any AI agent read Pablo Sagarna's CV and check his fit for a role.
The content comes from the [agent skill](https://psagarna.github.io/skill/) published in `psagarna.github.io`, so updating the CV there updates this server too.

## Tools

| Tool | What it does |
|---|---|
| `get_cv` | Full CV, `lang`: `en` or `es` |
| `get_projects` | OTS, PortableModel and PortableGW |
| `check_fit` | Takes a `job_description` and returns CV, projects and the format for the assessment |

Resources: `pablo://cv-en`, `pablo://cv-es`, `pablo://projects`, `pablo://resume`.

## Run locally

```
npm install
npm run dev        # http://localhost:8787/mcp
```

## Deploy to Cloudflare Workers

```
npx wrangler login
npm run deploy     # prints https://mcp.psagarna.workers.dev
```

## Connect

Add `https://mcp.psagarna.workers.dev/mcp` as a remote MCP server (custom connector) in Claude, or in any MCP client.

Claude Code:

```
claude mcp add --transport http pablo-sagarna https://mcp.psagarna.workers.dev/mcp
```

curl:

```
curl -s https://mcp.psagarna.workers.dev/mcp \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"get_cv","arguments":{"lang":"en"}}}'
```

All the steps: https://psagarna.github.io/skill/#use
