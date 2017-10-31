/**
 * Created by box on 2017/10/23.
 */
var express = require('express');
var app = express();

var config = require('./config.json');
var listenPort = config.port;

var SheetHandler = require('./sheetHandler.js');

process.on('uncaughtException', function (err) {
    console.error('Caught exception: ' + err.stack);
});

// 上传配置
app.get('/upload_config', function (req, res) {
    // 保存到数据库
    var bookList = req.query.data;
    for(var i in bookList){
        var sheetData = bookList[i];
        new SheetHandler(sheetData);
    }
    var result = {msg:"success"};
    res.send(result);
});

app.listen(listenPort);
console.log("listen port", listenPort);