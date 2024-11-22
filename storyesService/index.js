require('dotenv').config()
const sequelize=require('./db')
const express=require('express')
const router = require('./actionRoutes')
const PORT= 4000
const app=express()
app.use(bodyParser.json());
app.use(express.json())
app.use('/api', router)
const start=async()=>{
    try{

       await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, ()=>console.log(`server started port ${PORT}`))


    }catch(e){
        console.log(e)
    }

}
start()