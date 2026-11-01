# Implementation roadmap and gates
## Phase 0 / this branch
- Repository scaffold, source audit, architecture/ADR, API and schema boundaries, demo UI, provenance fixtures, calculation primitives, Python transport contracts, RLS-first migration and CI definition.
- Owner reviews design. Network research and real integrations remain gated; this is not the real-data proof of concept.

## Phase 1: source-backed District 15 evidence
Unblock official documentation, register only required accounts, approve data rights, implement verified endpoint adapters, immutable snapshots and normalization QA. Canonicalize one genuine new launch and one resale; report coverage and source dates. Expand to 15–25 projects only after identity matching passes. Build real search, transaction evidence, freshness/error/loading views.
Acceptance: one official source actually ingested; source IDs, coverage, rejects and completeness demonstrated; no synthetic rows in real search.

## Phase 2: complete dated investment engine
Version official tax/borrowing rules; model progressive schedules and loan ledger, rents/expenses and disposal. Support irregular equity contributions with ambiguity-safe IRR. Golden tests for zero/negative/missing cases and regulatory date boundaries; independent reconciliation. Deliver 5/10-year scenarios and break-even before claiming investment comparison.

## Phase 3: valuation and comparison
Deterministic matched comparables, auditable adjustments, uncertainty ranges, outlier exclusions, effective sample size, new-launch premium and fair-value analysis. Calibrate out of sample before any objective-looking opportunity score.

## Phase 4: enrichment and validation
Licensed OneMap/LTA access, maps and ECharts series, rental evidence, GLS/TOP pipeline and competition, latency/coverage reporting, leakage-safe historical backtests.

## Phase 5: secure MVP release (explicit approval)
Account/resource/cost review, hosted PostGIS migrations, authentication/RLS tests, licensing/export controls, observability, accessibility/browser tests and owner acceptance. Reproducible staging first; production only after explicit authorization. No deployment in this branch.

## Review checklist
Review synthetic labels, architecture tradeoffs, proposed accounts, source usage gates and limitations. CI configuration is included; only local checks reported in docs/validation.md are verified. Feature branch has an initial root commit because no main commit exists; GitHub cannot compare against an absent base branch until a default base is established.
