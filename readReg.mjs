import { connectToDatabase, disconnectFromDatabase } from "./db.mjs";
import BlogPost from "./models/blogspot.mjs";

try {
  // Use shared connection helper; URI is resolved inside db.mjs
  await connectToDatabase();

  const blogposts = await BlogPost.find({
    body: /mon/,
  });

  console.log("Found posts matching 'mon':", blogposts);
} catch (error) {
  console.error("ReadREg error:", error);
  process.exitCode = 1;
} finally {
  try {
    await disconnectFromDatabase();
  } catch (_) {
    // ignore disconnect errors
  }
}
