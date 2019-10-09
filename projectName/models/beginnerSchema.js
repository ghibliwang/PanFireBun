const mongose = require('mongoose')


//建立数据模型
const BeginnerSchema = new mongose.Schema({
    name:String,
    add:String,
    date:String

})
//导出数据模型以方便相关api的使用
module.exports = mongose.model('BeginnerSchema',BeginnerSchema)


