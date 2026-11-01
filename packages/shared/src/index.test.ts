import { it,expect } from 'vitest';
import { transactionSchema, demoTransactions,pricePsf } from './index';
it('requires explicit provenance and synthetic status',()=>{
 const { sourceId: _source, ...missingSource }=demoTransactions[0];
 expect(_source).toBeTruthy();
 expect(transactionSchema.safeParse(missingSource).success).toBe(false);
 expect(transactionSchema.safeParse({...demoTransactions[0],synthetic:undefined}).success).toBe(false);
});
it('rejects impossible date and nonpositive area',()=>{
 expect(transactionSchema.safeParse({...demoTransactions[0],date:'2025-02-30'}).success).toBe(false);
 expect(transactionSchema.safeParse({...demoTransactions[0],areaSqm:0}).success).toBe(false);
});
it('converts square metres to square feet before PSF',()=>expect(pricePsf({...demoTransactions[0],priceSgd:1076391.041671,areaSqm:100})).toBeCloseTo(1000,8));
