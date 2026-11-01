# CODEX CLOUD MASTER HANDOFF — SINGAPORE PROPERTY INVESTMENT INTELLIGENCE

Version: 1.0 | Prepared: 1 November 2026 | Project status: NOT STARTED

## YOUR ROLE AND OPERATING MODE
You are Codex Cloud, acting as lead product engineer, full-stack developer, data engineer, quantitative analyst, QA engineer, and DevOps implementer. The owner wants to VIBE CODE: do as much real work autonomously as permitted, minimize manual coding and repetitive instructions, and deliver an actual working product rather than mockups. Ask for user action only when necessary (account registration, consent, API credentials, deployment approval, or an unavailable external step). Be explicit about what you can do versus what the owner must do. Do not claim integrations, tests, or deployments succeeded unless verified. No prerequisites have been completed. No repo, accounts, API keys, database, or app are assumed to exist. First inspect your available environment and GitHub access; do not assume tools or permissions exist.

The owner already pays for ChatGPT Plus and prefers Codex Cloud/browser-first, GitHub, Cloudflare, and free/open-source technology. Do not require Claude, paid coding assistants, or paid AI inference. Existing ChatGPT subscription does not include OpenAI API credits. Favor Cloudflare deployment and Supabase PostgreSQL/PostGIS, with React/TypeScript and Python. Keep all costs and external account requirements visible.

## PRODUCT VISION
Build a Singapore private residential property INVESTMENT DECISION ENGINE, not a listings portal. Core decision: for a given budget, ownership profile, investment horizon and financing assumptions, is a new-launch condo, an existing resale condo, or an upcoming GLS-related opportunity economically more attractive? Show the investment case, actual transaction comparables, forecast scenarios, risks, confidence and data provenance. Support investor and owner-occupier modes eventually; prioritize investment analytics for MVP. Compare projects and, when licensed data allows, individual units. Never confuse asking price, developer advertised price, actual lodged transaction, estimated fair value, and live availability.

Initial geographic scope: Singapore District 15. Expand nationwide after validation. First real-data proof of concept: compare two genuine District 15 projects (one new launch, one resale) using source-backed transactions; no hardcoded property outcomes. Target an initial curated set of approximately 15–25 developments once ingestion and identity matching work. Build a search-driven discovery flow later.

## CORE USER JOURNEYS
1. Enter budget, buyer profile (citizenship/residency, number of existing residential properties, ownership shares where applicable), financing terms, intended use, and investment horizon.
2. Search and compare a new launch versus a resale project, including actual transaction and rental comparables, tenure, age, size, project quality, nearby amenities, and supply.
3. Determine whether the new-launch premium is justified after age, remaining lease, floor range, unit mix, location and market differences.
4. Model upfront capital, progressive payments, rental start dates, vacancy, taxes, fees, maintenance, mortgage, sale proceeds and cash-flow timing.
5. Present base/bear/bull scenarios, break-even growth rate, equity IRR, nominal and annualized returns, cash-on-cash yield, net profit, and downside risks.
6. Backtest historical purchases (e.g., hypothetical 2018 entry and 2025 exit) without look-ahead bias; label modeled rent and exit assumptions.
7. Discover candidate investment opportunities and emerging supply risks, including GLS pipeline, future launches, unsold stock, competing TOP dates, tenant demand and local catalysts.
8. Explain every result in plain English with sources and methodology; AI is optional and may only interpret outputs from the deterministic engine, not fabricate calculations.

## DATA MODEL AND SOURCES — AUDIT BEFORE INTEGRATION
Required categories:
- Project identity: canonical project ID, aliases, address, postal code, coordinates, district, planning area, tenure/freehold, lease commencement and remaining years, TOP/completion status, expected TOP, units, blocks, developer, facilities, project size, land parcel.
- Sales: transaction date, contract/registration date when available, actual transacted price, area, PSF, floor range, sale type (new sale/subsale/resale), source, coverage, quality flags.
- New launches: developer sales, units launched/sold, remaining inventory when available, advertised vs transacted PSF, estimated launch premium, developer land cost, breakeven estimates (clearly modeled), launch and expected TOP, payment schedule.
- Rentals: contracts, monthly rent, area, unit type, rental PSF, gross yield, estimated occupancy/vacancy, tenant pool and confidence intervals.
- Costs: buyer stamp duty (BSD), additional buyer stamp duty (ABSD), seller stamp duty (SSD), loan-to-value constraints, TDSR considerations, interest rates, legal fees, agent commissions, property tax, MCST maintenance, insurance, repairs, vacancy, property management, refinancing and sale expenses. All regulatory assumptions must be effective-date-specific and tested.
- Location: MRT/walk distance, transit, schools, amenities, jobs, accessibility, planning area, land use and future infrastructure. Distinguish straight-line distance from walk routing.
- Pipeline: GLS sites, land bids, upcoming launches, construction completions/TOP clusters, unsold inventory, new competing supply, zoning/URA Master Plan.
- Quality and liquidity: historical volume, time between transactions where observable, unit mix, floor and facing when legally available, developer track record, project maintenance and known uncertainty.

Source candidates: URA Data Service API (private residential transactions, rentals, developer sales, pipeline where exposed); URA REALIS (optional paid); data.gov.sg open datasets and URA market series; OneMap (geocoding and amenities); LTA DataMall (transport); URA Master Plan/GLS releases; SLA INLIS (optional paid due diligence); official IRAS/MAS/ABS/CPF/HDB/URA guidance for rules as applicable. Confirm CURRENT endpoints, field definitions, access requirements, coverage, refresh schedules, rate limits, commercial use and redistribution terms against authoritative documentation. Do not assume previous example API service names are valid; verify. URA public caveat data may be incomplete, and floor ranges are not exact floors. Do not scrape PropertyGuru, 99.co, EdgeProp or other portals without explicit authorization and compliant licensing. Public accessibility does not imply permission to redistribute. Provide a feasibility matrix: dataset, official URL, endpoint, authentication, cost, licence, coverage, refresh, fields, limitations, confidence, integration priority, status.

## VALUATION AND COMPARABLE PROPERTY ENGINE
Use deterministic comparable-sales methodology before ML. Candidate selection: geographic micro-market, time window, unit area/bedrooms, tenure/remaining lease, TOP/age, floor band, project scale, transaction type and quality. Proposed INITIAL matching weights, to be calibrated by out-of-sample tests: location/micro-market 25%; size/bedrooms 20%; tenure/remaining lease 20%; age/completion 15%; floor/unit attributes 10%; quality/liquidity 10%. Never present these subjective weights as empirically validated. Use evidence-based hedonic adjustments, robust medians, recency weighting and uncertainty ranges; do not assume that a fixed 10% or 15% age premium applies. Show comparable transaction table, adjusted PSF, effective sample size, excluded outliers, fair-value range and explanation. No fake precision. Avoid comparing broad CCR/RCR/OCR medians as though they were matched projects.

Earlier concept-level opportunity score (OPTIONAL, secondary to financial output): Entry Value 30%, Capital Appreciation Setup 25%, Rental Economics 20%, Supply/Exit Risk 15%, Developer/Project Factors 10%. Do not deploy as an objective score without defining measurable inputs, calibration and clear methodology. Financial IRR and downside analysis must remain primary.

## FINANCIAL ENGINE — MUST BE AUDITABLE
Build a dated, unit-tested cash-flow engine rather than a black-box AI prediction. Inputs: acquisition date, price, buyer tax profile, ownership count, financing/LTV, mortgage rate and rate changes, loan tenor, payment timing, legal and stamp duties, progressive construction payment stages for new launches, completion date, rental commencement, rent growth, vacancy, MCST/maintenance, insurance, property tax, repairs, sale date, sale price/growth scenario, seller stamp duty rules, sale commissions and outstanding mortgage redemption. Resale and new-launch financing timing must differ correctly. Calculate:
- Acquisition cash requirements and time-phased equity contributions.
- Monthly or dated financing cash flows and outstanding principal.
- Net operating income and net rental yield.
- Gross proceeds, net sale proceeds, total profit, annualized return, cash-on-cash, equity XIRR, and break-even exit PSF/appreciation needed to outperform alternative.
- Bull/base/bear scenarios with configurable assumptions and sensitivity analyses for growth, rates, vacancy, rents, delayed TOP and competing supply.
- Risk-adjusted comparison with explicit uncertainty and scenario weights only if justified.
Handle negative cash flows, unsold investments, zero rental during construction, irregular dates and missing inputs. Verify calculations with independent examples. Never hardcode results. Treat forecasts as scenarios, not predictions or financial advice. Make rule versioning/effective dates first-class: Singapore stamp duties and borrowing rules can change. Consult official authorities before setting defaults.

## UI / PRODUCT DESIGN
Professional, clean, light-themed analytics-first dashboard. Primary screens: onboarding/assumptions; search; project overview; two-column new launch vs resale comparison; transaction evidence; comparable pricing and premium; rent/yield; detailed cash-flow waterfall; scenario charts; break-even analysis; risk/supply timeline; geospatial map; source/methodology and data-freshness badges; exportable investment report. Responsive for mobile and desktop. Use clear typography and restrained colors. Charts: Apache ECharts. Maps: MapLibre with tiles that permit intended use; OneMap where terms allow. Accessibility, loading/empty/error states, data-source links and uncertainty warnings required. No fabricated screenshots, testimonials, project inventory or transactions. If live data unavailable, show clearly labeled synthetic fixtures only in development/demo mode.

## TECH STACK
Monorepo:
apps/web: React + TypeScript + Tailwind CSS (Vite or compatible Cloudflare framework).
services/api: Cloudflare Workers API (or a justified alternative within Cloudflare).
services/ingestion: Python + Pandas/Polars for ingestion, normalization, QA.
services/valuation: Python scikit-learn/XGBoost only later, after deterministic baseline; isolate model training.
packages/investment: deterministic typed financial calculations, with Vitest or Pytest golden tests.
packages/shared: schemas and validation (Zod/Pydantic as appropriate).
packages/database: SQL migrations and seed fixtures.
infra: deployment and environment documentation.
Database: Supabase Postgres + PostGIS (or documented compatible alternative); server-side secrets only, row-level security if applicable.
Source control: private GitHub repo named sg-property-intelligence; CI for lint, typecheck, tests, migrations validation, dependency scanning.
Open-source-first dependencies, permissive licences preferred. Do not require paid LLMs; optional Ollama/Qwen/Gemma for experimentation, and optional OpenAI API for explanations only, separately billed. Browser-first Codex Cloud. Avoid assuming long-running ingestion can run in Workers; propose scheduled/queue/batch architecture within service limits.

## ZERO-PREREQUISITE BOOTSTRAP — START HERE
A. Inspect available tools, environment and authenticated GitHub connection. If no repository exists, explain EXACT steps to create private `sg-property-intelligence` and connect Codex Cloud. If authorized tooling can create it, request approval and do so. Do not claim account creation or external access unless confirmed.
B. Create initial repo structure, README, AGENTS.md (Codex project instructions), .env.example with placeholders only, architecture ADRs, docs/product-requirements.md, docs/data-sources.md, docs/financial-methodology.md, docs/roadmap.md, docs/security.md, tests and CI. Never commit credentials or .env files.
C. Produce an ACTIONABLE account onboarding checklist, with official links and exact permissions: GitHub, Cloudflare, Supabase, URA Data Service, OneMap (later), data.gov.sg (if registration needed), LTA (later), OpenAI API optional. Clearly distinguish which require accounts, free keys, paid plans, or user identity verification. Avoid asking user to send passwords or API keys in chat. Use Codex environment secrets and Cloudflare/Supabase secret managers as supported; do not place OneMap account password in client code. Use least-privilege scoped tokens and development vs production separation.
D. Identify which APIs can be integrated without credentials now; implement mocked contract tests and documented real-API adapters pending secrets. Provide exact verification commands and expected outcomes. When access is granted, test connectivity and ingestion, redacting sensitive values.
E. Make a working local/preview UI with honest demo fixtures, then real District 15 data and financial engine; stage deployment behind explicit approval. Provide URL only after verified.
F. Provide owner-friendly step-by-step click instructions for any required setup in browser. Minimize terminal work. If a credential or account blocks one task, continue independent work instead of stopping entire project.

## COST AND APPROVAL GUARDRAILS
Initial goal: S$0–100 setup and S$0–25/month prototype where feasible; working planning envelope S$300 upfront. Early public MVP rough budget S$100–500 setup and S$30–150/month operations, excluding paid datasets, legal review, business registration and labor. These are historical planning estimates, NOT vendor quotes. Before spending, obtain current vendor prices and terms. Cloudflare, GitHub and Supabase free tiers first; no paid subscriptions, API calls with meaningful costs, paid data licences, production deploys, domain purchases or destructive changes without owner approval. Log estimated recurring cost per service. Largest uncertainty is property data licensing and completeness, not compute.

## ROADMAP AND GATES
Sprint 0 (immediate): confirm environment, zero-prerequisite onboarding, data-source feasibility and legal usage audit, architecture, schemas, initial repo, sample fixtures, CI. Owner approves design.
Sprint 1: real District 15 project/transaction ingestion, canonical project identity, data quality dashboard, basic search and charts.
Sprint 2: deterministic investment engine (BSD/ABSD/SSD effective-date rules, progressive payments, financing, rent, exit, IRR), automated golden tests.
Sprint 3: comparable matching, fair-value ranges, new launch premium and break-even; real new launch/resale side-by-side UI.
Sprint 4: geospatial enrichment, rental yield, supply/GLS/TOP competition and scenario risks; validation/backtests.
Sprint 5: secured public MVP, observability, reports, licensing and methodology disclosures, user acceptance.
Indicative development timeline: 1–2 weeks data foundation, 2–3 weeks comparison/finance, 1–2 weeks UI/intelligence, 1–2 weeks validation; not commitments. Initial target is a working, testable District 15 proof of concept, not full national coverage.

## MVP ACCEPTANCE TESTS
- Repo exists and reproducible build runs; no secrets committed.
- Real projects can be searched and source-linked; real transactions labeled distinctly from fixtures.
- One new launch and one resale project compared with transaction evidence and valid PSF calculations.
- At least one official data source ingested with source IDs, dates, refresh timestamps, completeness and validation report.
- Tax and mortgage engine has unit tests and dated rule assumptions; progressive payments modeled.
- 5- and 10-year scenario outputs include net profit, cash flows, IRR, yield and break-even; negative/downside cases work.
- No fabricated live inventory, rental performance, growth guarantees or transaction data.
- Every comparison explains source, adjustments, uncertainty and exclusions.
- CI passes and deployment is reproducible; production launch only after owner approval.

## FIRST RESPONSE REQUIRED FROM YOU (CODEX)
1. State what you actually inspected and what you can access (GitHub, repo, Cloudflare, Supabase, network, tools); do not invent access.
2. Give the owner the shortest exact click-by-click setup for missing prerequisites, starting with GitHub/Codex Cloud; distinguish must-do-now from later.
3. Create repo and baseline files if environment permits; otherwise give the owner a one-action blocker and prepare all files possible in workspace.
4. Produce source feasibility matrix with verified official links, no invented endpoints or unverified price claims.
5. Show initial architecture, data schema, API contracts, financial engine interface and phased tasks.
6. Implement what can be safely implemented immediately (scaffold, tests, fixtures, documentation) without waiting for optional keys.
7. End with a concise status report: files created, tests actually run, blocked integrations, credentials needed, costs, and the NEXT SINGLE ACTION for owner.

Work autonomously in small verifiable increments. Prefer code and tests over lengthy proposals, but do not bypass security, cost, licensing or deployment approval gates.
