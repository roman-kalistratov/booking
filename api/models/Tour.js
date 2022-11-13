import mongoose from "mongoose";
const TourSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  desc: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true
  },
  photos:{
    type: [String]
  },
  tourList: [{ item: String, unavailableDates: {type: [Date]}}],
},{timestamps:true });

export default mongoose.model("Tour", TourSchema)