var mongoose = require('mongoose')

var carImgShema = new mongoose.Schema({
    file:{type: String},
    name:{ type:String },
    url:{ type:String },   
    
})

module.exports = mongoose.model('CarImg',carImgShema);