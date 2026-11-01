# Infrastructure boundaries
Nothing deployed or provisioned. Local Vite requires no account. `services/api/wrangler.jsonc` declares a Worker entry point but running Wrangler or deploying is not part of the verified local path. Review current Workers limits, choose free tier and approve deployment separately. Python ingestion remains a separate batch process.

Supabase/PostGIS migration exists, with deny-by-default RLS. CI provisions only a disposable container when run; no paid hosted database is requested. Future production: scoped CI deployment identity, separate staging/prod, backups, secret managers, cost alerts and source rights review before publication.
