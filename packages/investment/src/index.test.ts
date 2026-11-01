import { describe,it,expect } from 'vitest';
import { xnpv,xirr,mortgagePayment } from './index';
describe('independent financial examples',()=>{
 it('one non-leap year 10% return',()=>{const f=[{date:'2023-01-01',amount:-100},{date:'2024-01-01',amount:110}];expect(xnpv(.1,f)).toBeCloseTo(0,10);expect(xirr(f)).toBeCloseTo(.1,10);});
 it('negative annual return',()=>expect(xirr([{date:'2023-01-01',amount:-100},{date:'2024-01-01',amount:80}])).toBeCloseTo(-.2,10));
 it('zero interest payment',()=>expect(mortgagePayment(120000,0,120)).toBe(1000));
 it('amortizing payment reference',()=>expect(mortgagePayment(100000,.06,360)).toBeCloseTo(599.550525,5));
 it('rejects ambiguous IRR',()=>expect(()=>xirr([{date:'2023-01-01',amount:-100},{date:'2024-01-01',amount:200},{date:'2025-01-01',amount:-110}])).toThrow());
 it('rejects invalid dates',()=>expect(()=>xnpv(.1,[{date:'2025-02-30',amount:1}])).toThrow());
 it('rejects missing receipts',()=>expect(()=>xirr([{date:'2023-01-01',amount:-100}])).toThrow());
});
