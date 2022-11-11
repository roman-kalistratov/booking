import express from 'express';
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import destinationsRoute from "./routes/destinations.js";
import toursRoute from "./routes/tours.js";
import cors from "cors";


const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

//middlewares
app.use(cors());

app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);
app.use('/api/destinations', destinationsRoute);
app.use('/api/tours', toursRoute);


mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

app.listen(8800, ()=> {
    connect();
    console.log('Connected to backend in port 8800.');
})