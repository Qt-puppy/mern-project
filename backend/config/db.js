import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MONGODB connected successfully !");
  } catch (error) {
    console.log("Error in setting up MONGODB : ", error);
    process.exit(1); // exit process with failure
  }
};
export default connectDB;
