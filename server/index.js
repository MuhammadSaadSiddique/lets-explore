import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRouter from "./routes/auth.js"; 
import roomRouter from "./routes/room.js";
import hotalRouter from "./routes/hotal.js";
import usersRouter from "./routes/users.js";
import cookieParser from 'cookie-parser';



const app = express();
dotenv.config();

const connect = async() =>{
    try {
        mongoose.connect(process.env.CONNECTION_URL)
        console.log('connected to database');
    } catch (error) {
        throw error;
    }
}
app.use(cookieParser());
app.use(express.json());

app.use("/auth" , authRouter);
app.use("/users" , usersRouter);
app.use("/hotal" , hotalRouter);
app.use("/room" , roomRouter);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });
app.listen(8800 , ()=>{
    connect();
    console.log('server  is running')
}) 