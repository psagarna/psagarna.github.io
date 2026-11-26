# Projects and innovation

All three projects were designed and built by Pablo himself. They show hands-on engineering in Go alongside his executive and architecture roles.

## OpenTool Specification (OTS) — creator and maintainer · open source (Apache 2.0)
Article: https://psagarna.github.io/OTS/
- A language-agnostic contract for MCP tools used by AI agents, analogous to what OpenAPI is for REST. The specification is written in YAML.
- OTS Gateway (reference implementation in Go) sits between AI agents and MCP servers: authenticates, authorises tool by tool, applies limits, quotas and token budgets, validates arguments, masks output and traces every call. It governs the three MCP primitives (tools, resources, prompts).
- Reference backend on WSO2 API Manager (OAuth2 client credentials); gateway configuration in JSON.
- VS Code plugin: OTS Designer.

## PortableModel — creator · private project
LLM inference gateway in Go for Apple Silicon and Linux.
- OpenAI-compatible API (/chat/completions and /embeddings) with API key authentication and input/output token tracking.
- Dynamic loading and unloading of models across several engines: llama.cpp, vLLM, ComfyUI (text-to-image) and Bark (text-to-speech); CPU/VRAM monitoring.
- Executes MCP tools server-side over Streamable HTTP, with header, bearer, basic and OAuth 2.1 machine-to-machine authentication (including discovery of the token endpoint per the MCP spec), allow/deny lists and tool caps.
- Observability: traces grouped by agent and conversation, a Server-Sent Events live stream, opt-in live debugging (pause, inspect, rewrite and resume requests) and a loop brake for tool routers.
- VS Code extension that draws a live map of agents, models and MCP servers, with model start/stop and debugging controls.

## PortableGW — creator · private project
Lightweight multi-tenant API Gateway and AI Gateway in Go, delivered as a single binary with several roles (gateway, mock server, dashboard, MCP server, admin console, state server).
- API management: native OpenAPI 3, hot reload without dropping connections, API key, JWT with scopes, built-in OAuth2 token issuer and external IdP validation (OIDC/JWKS, RS256), rate limiting, subscription plans, caching, mocking and bot protection on the token endpoint.
- Clustering: built-in state server to share rate limits and semantic embeddings across nodes, sharded and secured with mTLS.
- AI Gateway: OpenAI-format proxy across providers with guardrails to cut token costs: distributed semantic caching, semantic intent routing to local models, sliding-window truncation, prompt compression, verbosity control, retrieval of relevant context (RAG), DLP-style masking and provider fallback.
- Converts OpenAPI operations, and SQL queries exposed as REST endpoints, into MCP tools for AI agents.
