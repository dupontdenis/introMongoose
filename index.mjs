import { connectToDatabase, disconnectFromDatabase } from "./db.mjs";

// High-level (top-level) await version
try {
  // Let db.mjs resolve the URI from env or default
  await connectToDatabase();
  // Do app work here...
} catch (err) {
  console.error(err);
  process.exitCode = 1;
} finally {
  // For a simple demo, close the connection immediately.
  try {
    await disconnectFromDatabase();
  } catch (e) {
    // ignore disconnect errors
  }
}
