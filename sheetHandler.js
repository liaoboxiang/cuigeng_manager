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
    for(var i in lines){

    }
}