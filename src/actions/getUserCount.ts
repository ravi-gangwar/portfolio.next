"use server";

import { connectToDatabase } from "@/lib/db";

export async function getUserCount() {
  try {
    const db = await connectToDatabase();
    if (!db) {
      throw new Error("Failed to connect to database");
    }
    const collection = db.collection("portfolio");

    // Get total user count
    const userCount = await collection.countDocuments();

    return userCount;
  } catch (error) {
    console.error("❌ Error fetching user count:", error);
    return 0; // Return 0 in case of an error
  }
}
