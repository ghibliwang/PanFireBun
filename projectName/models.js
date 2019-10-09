const mongoose = require('mongoose')
const Schema = mongoose.Schema


const UserSchema = new Schema({
    name:String,
    password:String,
    email:String,
    addri:String,
    data:Date,
})
module.exports = mongoose.model('UserSchema',UserSchema)