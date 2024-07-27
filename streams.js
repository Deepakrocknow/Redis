const client = require('./client')

async function init(){
     await client.xadd('temp:in', '*', ['temp_c','78','pressure','48']);
}

init();