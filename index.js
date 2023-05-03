//mongodb+srv://nodeMongo:<password>@boilerplate.lt9hwwx.mongodb.net/?retryWrites=true&w=majority

const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://nodeMongo:psmongoproject1@boilerplate.lt9hwwx.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser:true, useUnifiedTopology:true
}).then(()=> console.log('mongoDb Connected...'))
.catch(err => console.log(err))

app.get('/',(req,res)=> res.send("Hello"))
app.listen(port,()=> console.log(`app port:  ${port} 연결완료`))