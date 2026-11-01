# Security and data rights
No secrets in committed files. Ignore .env, .dev.vars and local runtime files; .env.example contains names only. Do not print process environments or credentials. Inspect binding names/presence only. Browser builds must never receive Supabase service-role keys, source passwords or tokens. Separate development and production secrets and use least-privilege scopes.

SQL enables RLS on every initial table with no public policies. Service-role access bypasses RLS and must remain in reviewed server routes. No remote database or public data endpoint is enabled. Before a real API: authentication, authorization, rate limits, payload limits, input validation, redacted logs, safe error responses, source entitlement filters and public-field allowlists.

Record source terms and allowed storage/display/export/retention before ingestion. Public access is not redistribution permission. Do not store personal buyer/tenant identities or exact unit attributes without a lawful purpose and entitlement. Exports require a rights review. No portal scraping.

CI uses read-only repository permissions, dependency scanning and lockfile installation. Review dependency alerts before release. Hosted CI and migration execution are unverified until their actual runs succeed. External resources, production deployment, purchases and paid API use require explicit owner approval.
