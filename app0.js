const WebSocketServer = require('ws').Server;
var net = require('net');
var fs = require('fs');
//还是用文件实现交互
var cnt = 0;
var wss = new WebSocketServer({port: 8089});
wss.on('connection', function(ws){
    // ws.on('message', function(data){
    //     // console.log('client send: ' + data);
    // })

    //循环读取令牌
    // ws.send('hello');
    while (1){//不断读取令牌文件
        var lingpai = fs.readFileSync('/Users/zongliang/Desktop/node.js/socket/lingpai.txt', 'utf-8');
        ws.send(lingpai); 
    }
})