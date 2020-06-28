var mongoose = require('mongoose')

var carSchema = new mongoose.Schema({
    name:{ type:String },
    creationDate:{ type:Date,default:Date.now() },
    legalForm:{ type:String },
    slogan:{ type:String },
    headOffice:{ type:String },
    workforce:{ type: Number }, 
    capitalization:{ type: Number },
    turnover:{type:Number},
    website:{type: String},
    latitude:{type:Number},
    longitude:{type:Number}

    
})

module.exports = mongoose.model('Car',carSchema);