const express = require('express')
const app = express()
const fetch = require('node-fetch');
const cors = require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) 



app.get('/getUser',async function(req,res){
    
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => res.json(data));
  
  
})


app.listen(4000,function(){
    console.log('server started on port 4000')
})
