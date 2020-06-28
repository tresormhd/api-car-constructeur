const express = require('express')
bodyParser=require('body-parser')

const router = express.Router()
// models 
const catModel = require('../models/car')
// controller
const {CarConstructorQueries} = require('../controllers/car.controller')

var urlencodedParser = bodyParser.urlencoded({ extended: false })
router.get('/test',(req,res)=>{
    res.json(
        {
            status:"success",
            message:"api version 1 lancé ! "
        }
    )
})
router.get('/testRouter',urlencodedParser,async(req,res)=>{
    const results = await CarConstructorQueries.findAllCars()
    if(results.data === 0){
        res.json({
            status:"false",
            message:"no car in database ",
        })
    }else{
        res.json({
            status:"true",
            message:"find all cars ",
            data:results.data
        })
    }
    
})
router.get('/testRouter/:id',urlencodedParser,async(req,res)=>{
    const id = req.params.id
    const results = await CarConstructorQueries.findCarById(id)
    res.json({
        status:"true",
        message:"find car by id : " +id ,
        data:results.data
    })
})
router.post('/testRouter',async(req,res)=>{
    const data = req.body
    console.log("data",data)
    const results = await CarConstructorQueries.Addcar(data)
    if(!results.data){
        res.json({
            status:"false",
            message:"can't save car , please check doc",
            error:results.error
        })
    }else{
        res.json({
            status:"true",
            data:results.data
        })
    }
})
router.put('/testRouter/:id',async(req,res)=>{
    const id = req.params.id
    const data = req.body
    const results = await CarConstructorQueries.updateCar(id,data)
    if(!results.data){
        res.json({
            status:"false",
            message:"can't update car , please check doc",
            error:results.error
        })
    }else{
        res.json({
            status:"true",
            message:"updates successful ,car id : "+id,
            data:results.data
        })
    }
})
router.delete('/testRouter/:id',async(req,res)=>{
    const id = req.params.id
    const results = await CarConstructorQueries.deleteCarById(id)
    if (results.etat==false) {
        res.json({
            status:"false",
            message:"can't delete car by id: "+id,
            error:results.error
        })
       
    }else{
        res.json({
            status:"true",
            message:"delete car by id: "+id,
            data:results.data
        })
    
    }

})

module.exports = router