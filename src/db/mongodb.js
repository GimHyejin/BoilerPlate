require("dotenv").config();

const mongoose = require('mongoose')
//mongoose연결
const db = mongoose.connect(process.env.MONGOURL,{
  useNewUrlParser:true, useUnifiedTopology:true
}).then(()=> console.log('mongoDb Connected...'))
.catch(err => {
  console.log(process.env.MONGOURL)
  console.log(process.env.name)
  console.log(err)
})

module.exports = db