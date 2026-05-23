import dns from 'node:dns';
import mongoose from "mongoose";

// Override DNS servers to use public Google/Cloudflare DNS to resolve MongoDB Atlas SRV records,
// bypassing faulty or restrictive ISP DNS servers that cause querySrv ECONNREFUSED errors.
dns.setServers(["8.8.8.8", "8.8.4.4", "1.1.1.1"]);

const connectDB = async () => {

    mongoose.connection.on('connected',() => {
        console.log("DB Connected");
    })

    if (!process.env.MONGODB_URI || process.env.MONGODB_URI.includes('<username>')) {
        console.warn("WARNING: MONGODB_URI is not configured or still contains placeholder values. Please set MONGODB_URI in the .env file.");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, { dbName: 'e-commerce' })
    } catch (error) {
        console.error("Database connection error:", error.message)
    }

}

export default connectDB;