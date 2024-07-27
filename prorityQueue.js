const client = require('./client')


async function init(){
    const res1 = await client.zadd('score',7,"topa");
    const res2 = await client.zrank('score','0','-1');
    console.log(res1,res2);
}

init();