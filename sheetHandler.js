/**
 * Created by box on 2017/10/31.
 * ��excel��sheet������
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
// ��ÿ�����ݲ�������
function fixLineData(data){
    var sheetName = data.name;
    var lines = data.datas;
    for(var i in lines){

    }
}