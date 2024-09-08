const express = require('express');
const mongoose = require('mongoose');
const addrenterroutes = require('./Router/addrenter');

const app = express();
app.use(express.json());
  


const url = "mongodb://localhost:27017/RideOnRentals";

mongoose.connect(url)
  .then(() => {
    console.log("Database Connection Successful");
  })
  .catch(() => {
    console.log("Database Connection Failed");
  });


app.use('/api/addrenter',addrenterroutes);

app.get('/',(req,res)=>res.send('<h1>Hello world</h1>')); 
app.listen(1000);