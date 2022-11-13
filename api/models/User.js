import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    unique:true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique:true
  },
  password: {
    type: String,
    required: true
  },
  photo: {
    type: String,
  },
  city: {
    type: String,
  },
  country: {
    type: String,
  },  
  isAdmin: {
    type: Boolean,
    default: false
  }
},{timestamps:true });

export default mongoose.model("User", UserSchema)