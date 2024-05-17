import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config
const connectDB = async () => {
  try {
    await mongoose
      .connect("mongodb://localhost:27017/PetCare", {
        family: 4,
      })
      .then(() => {
        console.log("connection successfully ");
      });
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  }
};

export default connectDB;
