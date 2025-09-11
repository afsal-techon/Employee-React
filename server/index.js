import express from 'express';
import cors from 'cors'
import connectDB from './config/database.js';
import empRouter from './Routes/router.js'
const app = express();


app.use(cors("*"))
app.use(express.json());


 await connectDB();

 app.use('/emp',empRouter)


app.listen(2000,()=>{
    console.log('2000 port connected')
})
