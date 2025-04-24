import cookieParser from 'cookie-parser';
import express from 'express'; 
import cors from 'cors';
import connectDB from './configs/db.js';
import 'dotenv/config';
import userRouter from './routes/userRoute.js';




const app = express();
const port = process.env.PORT || 4000;

await connectDB()

//Allow multiple origins

const allowedOrigins=['http://localhost:5173']

//middleware Configuration
app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: allowedOrigins, Credential: true}));


app.get('/', (req,res)=> res.send("Api Is working"));
app.use('/api/user',userRouter)

app.listen(port,()=>{
    console.log(`Server Is Running on http://localhost:${port}`)
})