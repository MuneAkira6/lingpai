const WebSocketServer = require('ws').Server;
var net = require('net');
var fs = require('fs');
//还是用文件实现交互
var cnt = 0;
var flag = false;
var dataFlag = true;
var lingpaiFlag = true;
var wss = new WebSocketServer({port: 8081});
wss.on('connection', function(ws){
    while (1){
        //读取自己的文件 
        // var data1 = fs.readFileSync('/Users/zongliang/Desktop/node.js/socket/1.txt', 'utf-8');
        // if (data1 != ''){
        //     // ws.send(data1);
        //     fs.writeFileSync('/Users/zongliang/Desktop/node.js/socket/1.txt', '');
        // }
        //查询令牌
        var lingpai = fs.readFileSync('/Users/zongliang/Desktop/node.js/socket/lingpai.txt', 'utf-8');
        if (lingpai == '1'){//如果是我
            flag = true;
            cnt++;
        }
        else{//如果不是我
            //注意这里，如果还是自己就直接不跳了，所以，避免是自己
            cnt = 0;
        }
        
        //令牌到我手里了
        //如果要发送数据的话暂缓通知
        //通知发送令牌，只通知1次
        if (cnt == 1 && dataFlag == true){//如果数据没准备好，不发送数据，直接把令牌给下一个
            fs.writeFileSync('/Users/zongliang/Desktop/node.js/socket/lingpaiFlag.txt', '1');
        }

        //6秒内随机生成目的主机
        if (dataFlag == true){
            sleep(fullClose(1000, 6000));
            var dest = fullClose(1, 8);
            while (dest == 1){
                dest = fullClose(1, 8);
            }
            dest = dest.toString();
            var data = 'Host1 sends$ data to Host' + dest;
            dataFlag = false;//创建文件以后就不需再创建
            ws.send('^_^1');
        }
        //dataflag = false表示数据创建完成

        //出来以后再检查一次
        var lingpai = fs.readFileSync('/Users/zongliang/Desktop/node.js/socket/lingpai.txt', 'utf-8');
        if (lingpai == '1'){//如果是我
            flag = true;
        }
        else{
            flag = false;
        }
        //准备发送数据
        if (flag == true && dataFlag == false){//当我有令牌时，才能发送数据
            flag = false;
            ws.send('*_*1开始发送数据给' + dest);
            ws.send(data);//这里表示开始发送
            sleep(2000);//等待2秒，发送数据 
            // ws.send(data + '@');//数据发送结束，更改颜色
            //发出去以后可以再创建文件
            dataFlag =  true;//数据传输完毕，再次创建
            if (cnt == 1){//数据传输完毕以后再发送令牌
                fs.writeFileSync('/Users/zongliang/Desktop/node.js/socket/lingpaiFlag.txt', '1');
            }
        }

        
    }

})
function sleep(delay) {
    for (var t = Date.now(); Date.now() - t <= delay;);
}
//取得[n,m]范围随机数
function fullClose(n,m) {
    var result = Math.random() * (m + 1 - n) + n;
    while (result>m) {
        result = Math.random() * (m + 1 - n) + n;
    }
    return Math.round(result);
}