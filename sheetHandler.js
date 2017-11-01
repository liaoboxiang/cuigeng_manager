/**
 * Created by box on 2017/10/31.
 * 对excel的sheet做处理
 */

module.exports = function (data) {
    return new Handler(data);
};

function Handler(data) {
    if(data.name == 'movie') {
        fixLineData(data);
    }
};

var pro = Handler.prototype;




/**
 * inner function.
 */
// 把每行数据补充完整
function fixLineData(data){
    var sheetName = data.name;
    var lines = data.datas;
    // 第一行lines[0]是字段描述
    console.log(lines[0]);
    // 提取所有字段名
    var fieldList = [];
    for(var i in lines[0]){
        fieldList.push(i);
    }
    // 补全所有字段， 缺少的字段使用上一行的值
    var lastLineData = {};
    fieldList.forEach(function(field){
        lastLineData[field] = '';
    });
    var fullDataLines = [];
    for(var i in lines){
        if(i > 0){
            var line = lines[i];
            var fullDataLine = {};
            fieldList.forEach(function(field){
                if(line[field] == undefined){
                    fullDataLine[field] = lastLineData[field];
                }else{
                    fullDataLine[field] = line[field];
                    lastLineData[field] = line[field];
                }
            })
        };
        fullDataLines.push(fullDataLine);
    }
    console.log(fullDataLines);
}