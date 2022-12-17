import mongoose from "mongoose";
const OrderSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  userID:{
    type:String
  },
  tourID: {
    type: String
  },
  totalPrice: {
    type: Number
  } 
},{timestamps:true });

export default mongoose.model("Order", OrderSchema)