import mongoose from "mongoose";

async function connectDB() {
    try {
        await mongoose.connect(process.env.DB_URL)
    } catch (error) {
        console.error(error.message)
    }
}

export default connectDB