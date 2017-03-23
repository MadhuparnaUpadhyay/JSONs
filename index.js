var express=require('express')
var app=express()
var fs = require("fs")
let returnObj ={}

app.get('/recieve',function(req,res){
fs.readFile('./dumy.json', 'utf8', onFileRead)

function onFileRead(err, data) {  
  if (err) throw err;
  var currentPackage = JSON.parse(data)
   returnObj['username'] = currentPackage.username
   returnObj['password']= currentPackage.password
   returnObj['email']=currentPackage.email
   returnObj['uid']= currentPackage.uid
   returnObj['age']= currentPackage.age+20

  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify({returnObj}))
}
})

app.listen(8003,function(){
console.log("Express Started on Port 8003")
})


