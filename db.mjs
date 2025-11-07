import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Establish a MongoDB connection using ES Modules (Node "type": "module")
// Prefer MONGODB_URI from environment; fallback to a sensible local default.
const DEFAULT_URI = "mongodb://127.0.0.1:27017/my_database";

export async function connectToDatabase(
  uri = process.env.MONGODB_URI || DEFAULT_URI
) {
  try {
    // Mongoose v7+ no longer needs useNewUrlParser/useUnifiedTopology options
    await mongoose.connect(uri);
    console.log("MongoDB connected:", mongoose.connection.host);
    return mongoose.connection;
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    throw err;
  }
}

export async function disconnectFromDatabase() {
  try {
    await mongoose.connection.close();
    console.log("MongoDB disconnected");
  } catch (err) {
    console.error("MongoDB disconnection error:", err.message);
    throw err;
  }
}

export default connectToDatabase;
