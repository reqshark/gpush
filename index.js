

var dgram = require('dgram');
var glob = require('glob');


module.exports = function(argvs,cb){

  if(argvs[2] == 'start'){
    var address = '0.0.0.0'
    var server = dgram.createSocket('udp4');
    server.on('error',function(err){
      console.log(err);
      server.close();
    });
    server.on('message',function(msg,rinfo){
      console.log(msg);
    });
    server.on('listening',function(){
      var address = server.address();
      console.log('server listening on ',address.address,':',address.port)
    })
    server.bind(41234,address);
  }

  if(argvs[2] == 'test'){
    var client = dgram.createSocket('udp4');
    var msg = new Buffer('test');
    console.log(msg)
    for(var i=0;i<20;i++){
      client.send(msg,0,msg.length,41234,'192.241.163.88',function(err,bytes){
        console.log(bytes)
      })
    }
  }

}