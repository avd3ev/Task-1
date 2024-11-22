require('dotenv').config()
const sequelize=require('./db')
const axios=require('axios')
const express=require('express')
const router = require('./routes/index')
const PORT=process.env.PORT || 3000
const app=express()
app.use(bodyParser.json());
app.use(express.json())
app.use('/api', router)

exports.logAction = async (action, details) => {
    await axios.post('http://history-service:4000/actions', {
      action,
      ...details,
    });
  };
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