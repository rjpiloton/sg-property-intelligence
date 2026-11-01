import {it,expect} from 'vitest';
import api from './index';
it('demo route explicitly labels every row',async()=>{const r=await api.fetch(new Request('https://example.test/api/v1/demo/transactions'));const b=await r.json();expect(b.mode).toBe('synthetic');expect(b.data).toHaveLength(2);expect(b.data.every((t:{synthetic:boolean})=>t.synthetic)).toBe(true);});
it('health does not imply live integration',async()=>expect(await (await api.fetch(new Request('https://example.test/health'))).json()).toMatchObject({liveSources:0}));
it('unknown route returns 404',async()=>expect((await api.fetch(new Request('https://example.test/no'))).status).toBe(404));
