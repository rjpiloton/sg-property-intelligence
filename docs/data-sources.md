# Source feasibility audit
Audit attempted 2026-11-01 UTC. **All official documentation requests below returned proxy CONNECT 403 before reaching the destination.** URLs are official candidate references, not successfully verified current endpoint or licence evidence. No current service name, price, coverage guarantee or redistribution right is asserted. A reachable public page would still not grant reuse rights. No data was ingested.

| Dataset / official candidate reference | Endpoint / auth | Cost / licence | Coverage, refresh, fields, limits | Confidence / priority / status |
|---|---|---|---|---|
| URA private sales, rentals, developer sales / https://www.ura.gov.sg/maps/api/ | Exact services and token exchange unverified; access-key requirement to confirm | Free/paid access boundaries and commercial redistribution pending | Dates, prices, areas, floor bands, history depth, updates and quotas must be verified; caveats may be incomplete | Low current verification / P0 / blocked by policy |
| data.gov.sg / https://guide.data.gov.sg/developer-guide/api-overview | Dataset-specific endpoint and optional/required key must be checked; none guessed | Dataset-specific licence and attribution pending | Identify exact URA datasets and series first; dataset cadence and field semantics differ | Low / P0 / blocked |
| OneMap / https://www.onemap.gov.sg/apidocs/ | Current token flow and per-operation auth pending | Terms, quotas, commercial maps and tiles use pending | Geocoding/amenities, not property transactions; routing differs from straight-line distance | Low / P2 / blocked |
| LTA / https://datamall.lta.gov.sg/content/datamall/en/request-for-api.html | Account/key workflow and endpoint pending | Licence, quotas and pricing unverified | Transport enrichment; per-feed cadence and limits pending | Low / P2 / blocked |
| IRAS / https://www.iras.gov.sg/taxes/stamp-duty/for-property/buying-or-acquiring-property/buyer-s-stamp-duty-(bsd) | Official guidance, not an assumed API | Regulatory reference; reuse terms pending | Need dated BSD, ABSD and SSD schedules and exceptions separately | Low / P0 financial gate / blocked |
| URA GLS/Master Plan via https://www.ura.gov.sg/ | Exact releases/datasets pending | Terms and map reuse pending | Parcel identity, tender dates, zoning and units need verification; no inferred inventory | Unverified / P2 |
| MAS/CPF/ABS official guidance via https://www.mas.gov.sg/ and https://www.cpf.gov.sg/ and https://www.abs.org.sg/ | Guidance, no API assumed | Access/reuse pending | LTV, TDSR, borrowing and CPF rules require effective dates and buyer-specific constraints | Unverified / P1 |
| REALIS / https://www.ura.gov.sg/ ; INLIS / https://www.sla.gov.sg/ | Subscription/product access pending | Optional paid; do not subscribe without approval | Historical depth and due diligence fields subject to entitlement | Unverified / optional deferred |

Also blocked: https://supabase.com/docs/guides/database/extensions/postgis and https://developers.cloudflare.com/workers/platform/limits/ . Need authoritative runtime, extension and free-tier limit review before deployment.

## Verification procedure
1. Permit official documentation domains through environment settings; retry read-only documentation requests with TLS verification.
2. Record exact endpoint, documented version, access process, field dictionary, history depth, release cadence, quotas, source terms URL/date and allowed commercial display/export/retention. Archive evidence references, not credentials.
3. Select a specific credential-free open dataset only after its catalogue and licence are verified. At present no source is proven ready for credential-free ingestion.
4. Register only necessary source accounts; store server credentials securely. Test a small read-only request, redact errors, validate source record IDs and timestamps, quarantine invalid rows, and produce completeness report.
5. Approve source rights before using real rows in UI, exports or public deployment. Curate two genuine District 15 project identities; then expand toward 15–25 developments.

No PropertyGuru, 99.co or EdgeProp scraping is implemented or authorized. The URA adapter is an injected-transport boundary with mock tests, not a completed integration. Test with `npm run test:ingestion`; successful mock tests do not establish actual API compatibility.
