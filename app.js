const express = require('express');
const fs = require('fs');
const querystring = require('querystring');
var url = require('url');
var execSync = require('child_process').execSync;
//1.创建服务器
var app = express()
//2.路由

app.get('/', (req, res) => {
    // var stdout = execSync('node /Users/zongliang/Desktop/node.js/socket/client.js');
    // console.log(stdout.toString());
    fs.readFile('./index.html', (err, data) => {
        if (err)
            console.log(err);
        else{
            console.log('已发送');
            
            data = data.toString();

            res.setHeader('Content-Type', 'text/html;charset=utf-8');
            res.statusCode = 200;
            res.send(data);
            // res.end()
        }
    })
})
//3.启动服务
app.listen(8080, () => {
    console.log('Server run at localhost:8080');
})