import mongoose from "mongoose";
import { Data } from "../models/data.model.js";
import { givenData } from "./jsondata.js";

const DB_NAME = "temp";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB connected ! DB host : ${connectionInstance.connection.host}`
    );

    // data inserted into db.
    // Data.insertMany(givenData);
  } catch (error) {
    console.log("MongoDB connection error", error);
    process.exit(1);
  }
};

export default connectDB;
