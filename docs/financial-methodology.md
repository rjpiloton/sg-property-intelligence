# Financial methodology
Current validated primitives: ACT/365 dated NPV, bracketed XIRR for conventional single-sign-change cash flows, monthly fixed-rate amortizing payment. Inputs are SGD, annual decimal rates and ISO calendar dates. No real-property outcomes are hardcoded. Floating point is acceptable for this demonstrator; a production ledger needs explicit cent rounding and reconciled totals.

Independent golden examples: -100 then +110 after 365 days gives 10% XIRR; -100 then +80 gives -20%; 120,000 at 0% for 120 months gives 1,000 monthly; 100,000 at 6% for 360 months gives approximately 599.550525. Invalid dates, missing receipts and multiple sign changes fail. The restricted XIRR cannot yet evaluate general property equity ledgers with later contributions; use a validated multi-root diagnostic before that milestone. Never silently select a root.

No BSD/ABSD/SSD, LTV, TDSR or property-tax defaults have been activated. Each rule will include authority URL, effective start/end dates, buyer-profile constraints, review date and boundary tests. Joint buyers, property counts, nationality and ownership shares need explicit treatment; no blanket assumptions.

Future cash-flow ledger separates acquisition equity, staged developer payments and drawdowns, interest/principal, completion and rent commencement, vacancy/maintenance/taxes, disposal costs and mortgage redemption. New launches have zero rental income before usable completion; resale starts only under the specified tenancy scenario. Missing expenses must be disclosed or rejected. Unsold assets have no realized proceeds.

Scenarios are configurable assumptions, never forecasts. Compare 5/10-year base/bear/bull ledgers, sensitivity to rates/rent/vacancy/TOP delay/exit value, NOI/yield, cash-on-cash, nominal profit, annualized return and break-even exit PSF. No risk weights without rationale. Backtests freeze knowledge as of entry, preserve source publication dates and disclose modeled rent/exit assumptions.

Comparable matching begins with robust medians and recency/size/tenure/age/floor/micro-market filters. Proposed weights in the specification remain uncalibrated hypotheses. Report exclusions, effective sample size and ranges. Do not apply an invented age premium or equate asking prices with transacted values.
