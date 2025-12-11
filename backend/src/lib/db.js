import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL);
        console.log("MongoDB connected:",conn.connection.host);
    } catch(error){
        console.error("Error connection to MONGODB:", error);
        process.exit(1);// 1 for  fail and 0 for success

    }
};