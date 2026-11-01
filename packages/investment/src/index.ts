export interface CashFlow { date: string; amount: number }
function day(s: string): number {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(s)) throw new Error('Expected ISO calendar date');
  const d = Date.parse(s + 'T00:00:00Z');
  if (!Number.isFinite(d) || new Date(d).toISOString().slice(0,10) !== s) throw new Error('Invalid date');
  return d / 86400000;
}
/** ACT/365 dated NPV. Currency values are SGD; no tax assumptions are implicit. */
export function xnpv(rate: number, flows: CashFlow[]): number {
  if (!Number.isFinite(rate) || rate <= -1 || !flows.length) throw new Error('Invalid rate or empty cash flows');
  const dates = flows.map(f => day(f.date)); const start = Math.min(...dates);
  return flows.reduce((sum,f,i) => {
    if (!Number.isFinite(f.amount)) throw new Error('Invalid amount');
    return sum + f.amount / (1+rate)**((dates[i]-start)/365);
  },0);
}
/** Conventional cash flows only: one initial outflow, then nonnegative receipts.
 * Multiple sign changes can have multiple IRRs and are intentionally rejected. */
export function xirr(flows: CashFlow[]): number {
  const sorted = [...flows].sort((a,b)=>day(a.date)-day(b.date));
  if (sorted.length < 2 || sorted[0].amount >= 0 || sorted.slice(1).some(f=>f.amount<0) || !sorted.some(f=>f.amount>0) || day(sorted[0].date)===day(sorted.at(-1)!.date)) throw new Error('Unsupported cash flow pattern');
  let lo=-0.9999, hi=1;
  while (xnpv(hi,sorted)>0 && hi<1e6) hi*=2;
  if (xnpv(lo,sorted)*xnpv(hi,sorted)>0) throw new Error('IRR outside supported range');
  for(let i=0;i<200;i++){ const mid=(lo+hi)/2; if(xnpv(mid,sorted)>0)lo=mid;else hi=mid; }
  return (lo+hi)/2;
}
export function mortgagePayment(principal:number, annualRate:number, months:number):number {
  if (![principal,annualRate,months].every(Number.isFinite) || principal<0 || annualRate<0 || months<=0 || !Number.isInteger(months)) throw new Error('Invalid mortgage inputs');
  const r=annualRate/12; return r===0 ? principal/months : principal*r/(1-(1+r)**(-months));
}
