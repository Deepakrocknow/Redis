const client = require('./client')

async function init(){
   await client.sadd("ip",3);
   const res = await client.srem("ip",4);
   if(res){
      console.log("success");
   }
}

init();