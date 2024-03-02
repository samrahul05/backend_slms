
  
// const { Sequelize, DataTypes } = require('sequelize');

// const sequelize = new Sequelize({
//     dialect: 'mysql',
//     host: 'localhost',
//     username: 'root',
//     password: '',
//     database: 'SLMS',
//   });

// const User = sequelize.define('User', {
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     emailOrPhone: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     }
// },{
//         tableName: 'User', // Explicitly specify the table name here
//       },
//   );

const mongoose = require('mongoose')

const user = new mongoose.Schema({
  name:String,
  emailOrPhone:String,
  password:String
})

  module.exports =mongoose.model("User",user);



