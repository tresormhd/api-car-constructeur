const express = require('express')
        bodyParser=require('body-parser')
const morganLog=require('morgan')

const mongoose = require('mongoose');
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3300

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json()) 
app.use(cors())
app.use(morganLog('dev'))

            // connect mongo
            mongoose.connect('mongodb://localhost/api_carConstructor', 
            { 
                useFindAndModify:false,
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
                useCreateIndex: true,
            });
            var db = mongoose.connection;
            if(!db)
                console.log("Error connecting db")
            else
                console.log("Db connected successfully")


const route = require('./routes/index')


app.use("/api/v1",route )

app.listen(port,()=>{
    console.log('start at http://localhost:'+ port)
})
