# Validation evidence — 2026-11-01
Current cloud instance only; not a hosted deployment or new-task restoration test.

| Check | Actual result |
|---|---|
| Toolchain | Node 24.19.0, npm 11.9.0, Python 3.12.14 |
| GitHub read | `git ls-remote origin` succeeded with no refs; repository started empty |
| Reproducible dependencies | `npm ci --no-fund --no-audit` passed after lockfile generation |
| Lint / TypeScript | `npm run lint`, `npm run typecheck` passed |
| TypeScript tests | 13 passed across financial examples, schema/PSF/provenance and API handlers |
| Python ingestion tests | 5 passed; injected transport only, not a real API |
| Web build | `npm run build` passed; dependency comment annotations cause harmless Rollup warnings |
| Local functional HTTP | Vite started; GET / returned 200 and expected app title; GET /src/main.tsx returned 200 and compiled app. No browser automation or visual/accessibility audit run |
| SQL | Migration applied with ON_ERROR_STOP to disposable local PostGIS 16-3.4; all four application tables have RLS enabled |
| Dependency scan | `npm audit --audit-level=high` exited 0 after tooling upgrade; 11 moderate lint-chain findings remain, no high/critical findings |
| Official source verification | Seven official documentation URLs blocked by proxy CONNECT 403; no live source integrated |
| Hosted CI / Worker runtime / Supabase | Not run or provisioned |

No real transactions, full financial scenarios, tax rules, authenticated live adapters or deployed URLs are asserted. Browser interaction and production security testing are future gates. A synthetic fixture cannot meet real-data MVP acceptance.

Environment draft saved: install_script, start_skill and additive official-documentation domain list. Saving does not apply network policy or publish a snapshot. Owner must review/save settings and publish when appropriate. No secrets were requested because exact source entitlements/endpoints remain unverified.
