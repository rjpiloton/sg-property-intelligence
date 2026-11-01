# Singapore Property Intelligence
District 15 investment research foundation. **Phase 0, synthetic demo only.** No real project data, tax defaults, live inventory or investment recommendations.

## Run locally
Prerequisites: Node 24 / npm 11 and Python 3.12. No account, database, API key or paid service is needed for the demo.
```sh
npm ci
npm run check
npm run test:ingestion
npm run dev
```
Vite serves the web demo on port 5173. This is a development server, not a production deployment. The web uses shared in-memory synthetic fixtures; the Worker is a separate tested API scaffold and is not wired into this demo. No environment file is needed.

## Repository
- `apps/web`: React + TypeScript + Tailwind interface.
- `services/api`: Workers-compatible request handler; `/health`, `/api/v1/demo/transactions`.
- `services/ingestion`: standard-library Python normalization and injected-transport adapter boundary.
- `services/valuation`: deferred deterministic matching design.
- `packages/investment`: dated financial primitives; no full property model yet.
- `packages/shared`: Zod transaction schema and explicit synthetic fixtures.
- `packages/database`: PostGIS SQL migration; no hosted database configured.
- `docs`: [architecture](docs/architecture.md), [roadmap](docs/roadmap.md), [source audit](docs/data-sources.md), [account setup](docs/account-setup.md), [financial methodology](docs/financial-methodology.md), [security](docs/security.md).

The uploaded [master specification](docs/master-specification.md) is retained for traceability. Current scope and gates are in [product requirements](docs/product-requirements.md). Production deployment requires owner approval.
