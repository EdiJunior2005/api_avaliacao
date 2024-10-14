import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const conectDB = async () => {
  try {
    await mongoose
      .connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.CLUSTER_ADDRESS}/${process.env.DB_NAME}`
      )
      .then(() => console.log("conecto"));
  } catch (error) {
    console.log(`erro ${error}`);
  }
};
export default conectDB;
