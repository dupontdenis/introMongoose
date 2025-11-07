import { connectToDatabase, disconnectFromDatabase } from "./db.mjs";
import BlogPost from "./models/blogspot.mjs";

try {
  // Use shared connection helper; URI is resolved inside db.mjs
  await connectToDatabase();

  // find all Post
  const query = BlogPost.find({});

  // selecting the body field
  query.select("body");

  // selecting body.length<=20 characters
  query.$where(
    "this.body.length <= 20https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m"
  );

  // execute the query
  const blogs = await query.exec();
  console.log("Found blogs with body length <= 20:", blogs);
} catch (error) {
  console.error("Query error:", error);
  process.exitCode = 1;
} finally {
  try {
    await disconnectFromDatabase();
  } catch (_) {
    // ignore disconnect errors
  }
}
