const express = require('express')
const cookieParser = require('cookie-parser');
const  helmet  = require('helmet');
const  cors  = require('cors');
const mongoose  = require('mongoose');
const authRouter = require('./routers/authRouter.js');





const app= express();
app.use(cors())
app.use(helmet())
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

mongoose.connect(process.env.MONGO_URI/* mongodb uri */)
.then(()=>{console.log("db connected...")})
.catch((err)=>{console.log(err)
})

app.use('/api/auth', authRouter)

app.get('/', (req, res)=> {
    res.send("hi im running!")
})





app.listen(process.env.PORT/* port number */, ()=> {
    console.log('server started');
}) 