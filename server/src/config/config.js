const mysql2=require("mysql2")
const connection=mysql2.createPool({
     host:"",
     user:"root",
     password:"duong15032001",
     port:3307,
     database:"baitap"
})
const database=connection.promise()
module.exports=database