
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const {User} = require('./src/models/User')
const path = require('path')
const app = express()
const port = 5000


require("dotenv").config()
//require('dotenv').config({ path: path.join(__dirname, '/.env') }); 
console.log(path.join(__dirname))
console.log(process.env.name)

// const db = require('./src/db/mongodb')
//mongoose연결
const db = mongoose.connect(process.env.MONGOURL,{
  useNewUrlParser:true, useUnifiedTopology:true
}).then(()=> console.log('mongoDb Connected...'))
.catch(err => {
  console.log(process.env.MONGOURL)
  console.log(err)
})

//bodyParser 설정
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.post('/register', async (req, res) => {
    try {
      const user = new User(req.body);
      const savedUser = await user.save();
      return res.status(200).json({success:true });
    } catch (err) {
      return res.json({success:false, err});
    }
  });


app.get('/',(req,res)=> res.send("Hello"))
app.get('/register',(req,res)=> res.send("regitster 파일 "))
app.listen(port,()=> console.log(`app port:  ${port} 연결완료`))
