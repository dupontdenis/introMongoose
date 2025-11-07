import { connectToDatabase, disconnectFromDatabase } from "./db.mjs";
import BlogPost from "./models/blogspot.mjs";

try {
  // Use shared connection helper; URI is resolved inside db.mjs
  await connectToDatabase();

  const blogposts = await BlogPost.find({
    body: /mon/i,
  });

  console.log("Found posts matching 'mon' (case-insensitive):", blogposts);
} catch (error) {
  console.error("ReadExp_v2 error:", error);
  process.exitCode = 1;
} finally {
  try {
    await disconnectFromDatabase();
  } catch (_) {
    // ignore disconnect errors
  }
}
