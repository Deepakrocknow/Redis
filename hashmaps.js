const client = require('./client')


async function init(){
    await client.hset('bike:1',{
        model:"patola",
        cc:"150"
    })
    const res = await client.hget('bike:1',"price");
    const res1 = await client.hincrby('bike:1',"price",200);
    console.log(res , res1);
}

init();