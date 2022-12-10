import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import destinationsRoute from "./routes/destinations.js";
import toursRoute from "./routes/tours.js";
import cookieParser from "cookie-parser";
import multer from 'multer';
import cors from "cors";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `../admin/public/uploads`)
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
})
const upload = multer({ storage: storage })


const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});


//middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users",upload.single('file'), usersRoute);
app.use("/api/destinations", destinationsRoute);
app.use("/api/tours", toursRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500
  const errorMessage = err.message || "something went wrong"
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  })
})

const PORT = process.env.PORT || 8800;
app.listen(8800, () => {
  connect();
  console.log(`Connected to Server, Port: ${PORT}`);  
});