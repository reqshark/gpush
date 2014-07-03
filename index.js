

var dgram = require('dgram');


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

}