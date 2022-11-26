import mongoose from "mongoose";
const DestinationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  photo: {
    type:String,
  },
  tours: {
    type: [String],
  },
  featured: {
    type: Boolean,
    default: false
  }
});

export default mongoose.model("Destination", DestinationSchema)