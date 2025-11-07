import { connectToDatabase, disconnectFromDatabase } from "./db.mjs";
import BlogPost from "./models/blogspot.mjs";

try {
  // Let db.mjs resolve the URI from env or default
  await connectToDatabase();

  const blogpost = await BlogPost.create({
    title: "Creation",
    body: "Mon premier message.",
  });

  console.log("Created:", blogpost);
} catch (error) {
  console.error("Create error:", error);
  process.exitCode = 1;
} finally {
  try {
    await disconnectFromDatabase();
  } catch (_) {
    // ignore disconnect errors
  }
}
