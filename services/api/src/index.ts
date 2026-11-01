import { demoTransactions } from '../../../packages/shared/src/index';
export default { async fetch(request: Request): Promise<Response> {
 const path=new URL(request.url).pathname;
 if(request.method!=='GET') return Response.json({error:'Method not allowed'},{status:405,headers:{Allow:'GET'}});
 if(path==='/health') return Response.json({status:'ok',mode:'demo',liveSources:0});
 if(path==='/api/v1/demo/transactions') return Response.json({mode:'synthetic',data:demoTransactions});
 return Response.json({error:'Not found'},{status:404});
} };
