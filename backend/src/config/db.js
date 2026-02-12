import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URI;
        if (!uri) {
            console.error("❌ MONGO_URI is undefined. Check your .env file.");
            process.exit(1);
        }

        await mongoose.connect(uri);


        console.log("✅ MongoDB connected");
    } catch (error) {
        console.log("❌ DB Error:", error.message);
        process.exit(1); // Exit with failure
    }
};
