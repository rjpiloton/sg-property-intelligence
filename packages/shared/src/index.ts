import { z } from 'zod';
export const transactionSchema = z.object({
  id: z.string().min(1), projectId: z.string().min(1), district: z.literal(15),
  date: z.iso.date(), priceSgd: z.number().positive(), areaSqm: z.number().positive(),
  saleType: z.enum(['new-sale', 'subsale', 'resale']), floorRange: z.string().nullable(),
  sourceId: z.string().min(1), retrievedAt: z.iso.datetime(), synthetic: z.boolean(),
  qualityFlags: z.array(z.string()),
});
export type Transaction = z.infer<typeof transactionSchema>;
export const SQFT_PER_SQM = 10.76391041671;
export function pricePsf(t: Transaction): number { return t.priceSgd / (t.areaSqm * SQFT_PER_SQM); }
export const demoTransactions: Transaction[] = [
  { id:'demo-1', projectId:'synthetic-launch-a', district:15, date:'2025-01-01', priceSgd:2000000, areaSqm:80, saleType:'new-sale', floorRange:'06–10', sourceId:'synthetic-fixture-v1', retrievedAt:'2026-11-01T00:00:00Z', synthetic:true, qualityFlags:['not-real-market-data'] },
  { id:'demo-2', projectId:'synthetic-resale-b', district:15, date:'2025-01-01', priceSgd:1800000, areaSqm:85, saleType:'resale', floorRange:'06–10', sourceId:'synthetic-fixture-v1', retrievedAt:'2026-11-01T00:00:00Z', synthetic:true, qualityFlags:['not-real-market-data'] },
].map(t => transactionSchema.parse(t));
