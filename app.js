/**
 * Created by box on 2017/10/23.
 */
var express = require('express');
var app = express();

var config = require('./config.json');
var listenPort = config.port;

process.on('uncaughtException', function (err) {
    console.error('Caught exception: ' + err.stack);
});

// �ϴ�����
app.get('/upload_config', function (req, res) {
    // ���浽���ݿ�
    var result = {msg:"success"};
    res.send(result);
});

app.listen(listenPort);
console.log("listen port", listenPort);