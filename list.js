const client = require('./client')

async function init(){
     await client.lpush("msg","cheetah")
     const res = await client.rpop("msg");
     console.log(res)
}

init();

//console.log(client)