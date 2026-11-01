# Owner account and access checklist
No purchases or production deployment are needed now. Existing GitHub read access works. Repository visibility and GitHub API/push permission have not been verified; confirm private visibility in GitHub Settings → General before adding proprietary data. Never send credentials in chat.

## Must do next for real-data research
In this cloud environment's settings, review the saved official-domain additions, save and apply the network configuration. This permits documentation research; it does not register accounts or grant data rights.

## When the roadmap reaches each integration
- **GitHub** (https://github.com/): open rjpiloton/sg-property-intelligence → Settings → Collaborators / GitHub Apps; grant the connected Codex application access to this repository only if needed. Review the feature branch and diff. Push is distinct from read access. Enable branch protection after an initial default branch exists. No token is needed for the current local scaffold.
- **Cloudflare** (https://dash.cloudflare.com/): create/sign in to an account; select Workers & Pages. Do not enable paid Workers or deploy yet. When approved, create a development-only API token in My Profile → API Tokens with the narrowly required account Workers Scripts edit permission and selected account scope; avoid Global API Key. Verify current granular permission names in the dashboard. Store deployment token in the CI secret store, never a VITE variable. Production and DNS permissions require separate approval.
- **Supabase** (https://supabase.com/dashboard): create/sign in to an organization. After free-tier availability/limits and region are reviewed, create a development project only with owner resource approval; keep production separate. Store database password securely. Project Settings → API provides URL and server keys (UI labels may change). Service role/secret keys belong only in server secret managers. Enable PostGIS and apply SQL to a disposable database first; review RLS before exposing any route. A local demo needs no Supabase project.
- **URA** (https://www.ura.gov.sg/maps/api/): after network access, follow the current official Data Service registration and entitlement instructions. Confirm individual/business identity requirements and permitted commercial reuse before applying. Add a required access key to server-side environment secrets only after the actual credential flow and allowed destination are verified; never paste it here. No exact API service names are assumed.
- **data.gov.sg** (https://guide.data.gov.sg/developer-guide/api-overview): inspect selected dataset docs first. Use anonymous access only if explicitly supported; if a key is required, follow the documented registration flow and minimum scope. Catalogue availability is not licence approval.
- **OneMap** (https://www.onemap.gov.sg/apidocs/): later, follow current account/token instructions. Keep account password and refresh credentials server-side. Verify routing, token expiry and tile attribution/usage separately.
- **LTA DataMall** (https://datamall.lta.gov.sg/): later, select Request for API Access and follow official form. Confirm permitted datasets, organization details, current key requirements and quotas. Store AccountKey server-side if the verified API uses it.
- **OpenAI API**: optional and deferred. ChatGPT Plus supplies no API credits. No OpenAI API account, paid inference or key is needed.

Exact dashboard labels and all provider prices remain to be verified against reachable official documentation. No account registration, identity verification, resource provisioning or spending has been performed.

## Cost register
| Component | Current cost incurred by this work | Next cost gate |
|---|---|---|
| Local demo / tests | No service purchase | Existing environment usage governed by owner's plan |
| GitHub CI | Not run remotely | Check included Actions minutes and private-repo limits |
| Cloudflare / Supabase | No resources created | Review current free quotas; obtain approval before billable use |
| URA / optional REALIS / INLIS | No subscription or paid calls | Verify data entitlement and current price; explicit purchase approval |
| OneMap / LTA / data.gov.sg | No account/API calls | Verify quotas, terms and any current fees |

Planning budgets from the master specification are not vendor quotes or permission to spend.
