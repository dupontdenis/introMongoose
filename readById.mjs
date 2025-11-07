import { connectToDatabase, disconnectFromDatabase } from "./db.mjs";
import BlogPost from "./models/blogspot.mjs";

// Change with a valid ID from your database
const id = "690ce8560eaaaea37348a4b3";

try {
  // Use shared connection helper; URI is resolved inside db.mjs
  await connectToDatabase();

  const blogpost = await BlogPost.findById(id);
  console.log("Found post by ID:", blogpost);
} catch (error) {
  console.error("ReadById error:", error);
  process.exitCode = 1;
} finally {
  try {
    await disconnectFromDatabase();
  } catch (_) {
    // ignore disconnect errors
  }
}
