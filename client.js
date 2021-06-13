var net = require('net');
var fs = require('fs');

var client1 = new net.Socket();
client1.setEncoding('binary');
client1.connect(8081, '127.0.0.1', function(){
    client1.write('hello server');
});
client1.on('data', function(data){
    console.log('from server1: ' + data);
    // fs.writeFileSync('/Users/zongliang/Desktop/node.js/socket/client.txt', '');
    // fs.writeFileSync('/Users/zongliang/Desktop/node.js/socket/client.txt', 'from server1: ' + data + '\n');
})
client1.on('close', function(){
    console.log('connection closed');
})

var client2 = new net.Socket();
client2.setEncoding('binary');
client2.connect(8082, '127.0.0.1', function(){
    client2.write('hello server');
});
client2.on('data', function(data){
    console.log('from server2: ' + data.toString());
    // fs.writeFileSync('/Users/zongliang/Desktop/node.js/socket/client.txt', '');
    // fs.writeFileSync('/Users/zongliang/Desktop/node.js/socket/client.txt', 'from server2: ' + data + '\n');
})
client2.on('close', function(){
    console.log('connection closed');
})

var client3 = new net.Socket();
client3.setEncoding('binary');
client3.connect(8083, '127.0.0.1', function(){
    client3.write('hello server');
});
client3.on('data', function(data){
    console.log('from server3: ' + data);
    // fs.writeFileSync('/Users/zongliang/Desktop/node.js/socket/client.txt', '');
    // fs.writeFileSync('/Users/zongliang/Desktop/node.js/socket/client.txt', 'from server3: ' + data + '\n');
})
client3.on('close', function(){
    console.log('connection closed');
})

var client4 = new net.Socket();
client4.setEncoding('binary');
client4.connect(8084, '127.0.0.1', function(){
    client4.write('hello server');
});
client4.on('data', function(data){
    console.log('from server4: ' + data);
    // fs.writeFileSync('/Users/zongliang/Desktop/node.js/socket/client.txt', '');
    // fs.writeFileSync('/Users/zongliang/Desktop/node.js/socket/client.txt', 'from server4: ' + data + '\n');
})
client4.on('close', function(){
    console.log('connection closed');
})

var client5 = new net.Socket();
client5.setEncoding('binary');
client5.connect(8085, '127.0.0.1', function(){
    client5.write('hello server');
});
client5.on('data', function(data){
    console.log('from server5: ' + data);
    // fs.writeFileSync('/Users/zongliang/Desktop/node.js/socket/client.txt', '');
    // fs.writeFileSync('/Users/zongliang/Desktop/node.js/socket/client.txt', 'from server5: ' + data + '\n');
})
client5.on('close', function(){
    console.log('connection closed');
})

var client6 = new net.Socket();
client6.setEncoding('binary');
client6.connect(8086, '127.0.0.1', function(){
    client6.write('hello server');
});
client6.on('data', function(data){
    console.log('from server6: ' + data);
    // fs.writeFileSync('/Users/zongliang/Desktop/node.js/socket/client.txt', '');
    // fs.writeFileSync('/Users/zongliang/Desktop/node.js/socket/client.txt', 'from server6: ' + data + '\n');
})
client6.on('close', function(){
    console.log('connection closed');
})

var client7 = new net.Socket();
client7.setEncoding('binary');
client7.connect(8087, '127.0.0.1', function(){
    client7.write('hello server');
});
client7.on('data', function(data){
    console.log('from server7: ' + data);
    // fs.writeFileSync('/Users/zongliang/Desktop/node.js/socket/client.txt', '');
    // fs.writeFileSync('/Users/zongliang/Desktop/node.js/socket/client.txt', 'from server7: ' + data + '\n');
})
client7.on('close', function(){
    console.log('connection closed');
})

var client8 = new net.Socket();
client8.setEncoding('binary');
client8.connect(8088, '127.0.0.1', function(){
    client8.write('hello server');
});
client8.on('data', function(data){
    console.log('from server8: ' + data);
    // fs.writeFileSync('/Users/zongliang/Desktop/node.js/socket/client.txt', '');
    // fs.writeFileSync('/Users/zongliang/Desktop/node.js/socket/client.txt', 'from server8: ' + data + '\n');
})
client8.on('close', function(){
    console.log('connection closed');
})