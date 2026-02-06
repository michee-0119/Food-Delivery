import mongoose from "mongoose";

export const connectToMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING!);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
};

export default connectToMongoDb;
