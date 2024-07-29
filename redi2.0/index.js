const net = require('net');
const Parser = require('redis-parser')
const store = {};
const server = net.createServer(connection=>{
      console.log("client connected")
      connection.on('data',data=>{
        const parser = new Parser({
              returnReply:(reply)=>{
                const command = reply[0];
                switch(command){
                    case 'set':{
                        const key = reply[1];
                        const value = reply[2];
                        store[key] = value;
                        connection.write('+OK\r\n')
                    }
                    break;
                    case 'get':{
                        const key = reply[1];
                        const value = store[key]
                        if(value) connection.write(`$${value.length}\r\n${value}\r\n`)
                        else connection.write('$-1\r\n')
                    }
                }
               console.log('=>',reply);
              },
              returnError:(err)=>{
                console.log('=>',err);
              }
        });
        //console.log('=>',data.toString())
        parser.execute(data);
      })
})

server.listen(4500,()=>console.log("server working bolte")) 