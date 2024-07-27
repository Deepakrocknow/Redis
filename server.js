const express= require('express');
const axios = require('axios').default;
const client = require('./client')

const app =express();

app.get('/',async(req,resp)=>{
      const cache = await client.get('todos');
      if(cache){
          return resp.json(JSON.parse(cache));
      }
      const {data} = await axios.get("https://jsonplaceholder.typicode.com/todos");
      await client.set('todos',JSON.stringify(data));
      await client.expire('todos',30)
      return resp.json(data)
})  

app.listen(4500);