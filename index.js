const client = require('./client')

async function init(){
    //await client.expire('user:3',10);
    const res = await client.get('air:1');
    console.log(res);
}
 
init() 