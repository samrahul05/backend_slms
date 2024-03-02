// requiring packages 
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const CookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config();
const router =require('./Router/Auth')
const bodyParser = require('body-parser');
// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = require('./Modules/User')




// sequelize.sync()
//   .then(() => {
//     console.log('Database connection successful');
//   })
//   .catch((error) => {
//     console.log('DB connection error:', error);
//   });
mongoose.connect('mongodb+srv://SAM_RAHUL:IoHX7fIA1Snl2GBq@cluster0.hqoru8l.mongodb.net/')
.then(()=>{
  console.log("DB is connected");
})
.catch(()=>{
   console.log("DB is not connected");
})




app.use(cors())
app.use(express.json())
app.use(bodyParser.json());
app.use(express.urlencoded({extended:false}))
app.use('/api',router)



// port server 

app.listen(7000,()=>{
    console.log(`Server listening on port:7000`);
})


