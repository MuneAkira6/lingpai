var fs = require('fs');
while (1){
    let lingpaiFlag = fs.readFileSync('/Users/zongliang/Desktop/node.js/socket/lingpaiFlag.txt', 'utf-8');
    if (lingpaiFlag == '1'){
        let lingpai = fs.readFileSync('/Users/zongliang/Desktop/node.js/socket/lingpai.txt', 'utf-8');
        sleep(1000);
        //开始变换
        lingpai = parseInt(lingpai);
        if (lingpai == 8)
            lingpai = 1;
        else
            lingpai++;
        fs.writeFileSync('/Users/zongliang/Desktop/node.js/socket/lingpai.txt', lingpai.toString());
        fs.writeFileSync('/Users/zongliang/Desktop/node.js/socket/lingpaiFlag.txt', '');
    }
}
function sleep(delay) {
    for (var t = Date.now(); Date.now() - t <= delay;);
}