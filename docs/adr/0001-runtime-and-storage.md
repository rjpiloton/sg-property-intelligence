# ADR 0001: runtime and storage
Status: proposed for owner review.

Use React/Vite + TypeScript/Tailwind for local/static UI, Workers for lightweight HTTP endpoints, Python for ingestion and deterministic comparable analysis, PostgreSQL/PostGIS for canonical records and spatial joins. Shared TypeScript investment functions remain independent of network and UI. Standard-library Python avoids unnecessary prerequisites until real source processing requires Polars/Pandas.

Tradeoffs: cross-language mapping needs contract tests; Workers are unsuitable for arbitrary long-running Python jobs; hosted credentials and source licences remain prerequisites. No deployment or paid service is authorized. Supabase service role is server-side and bypasses RLS, so it must never enter browser bundles. Local demo runs without any of these accounts.
