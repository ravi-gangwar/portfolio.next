"use server";

import { connectToDatabase } from "@/lib/db";

export async function registerUser(fingerprint: string) {
  try {
    const db = await connectToDatabase();
    const collection = db.collection("portfolio");

    // Check if user already exists
    const existingUser = await collection.findOne({ fingerprint });

    if (!existingUser) {
      await collection.insertOne({
        fingerprint,
        createdAt: new Date(),
      });
      console.log("✅ New user registered:", fingerprint);
    } else {
      console.log("🔹 User already exists:", fingerprint);
    }
  } catch (error) {
    console.error("❌ Error registering user:", error);
  }
}
