"use server";

import { connectToDatabase } from "@/lib/db";

export async function registerUser(fingerprint: string, ipv4: string, ipv6: string) {
  try {
    const db = await connectToDatabase();
    if (!db) {
      throw new Error("Failed to connect to database");
    }
    const collection = db.collection("portfolio");

    // Check if user already exists
    const existingUser = await collection.findOne({ fingerprint });

    if (!existingUser) {
      await collection.insertOne({
        fingerprint,
        ipv4,
        ipv6,
        createdAt: new Date(),
      });
      console.log("✅ New user registered:", { fingerprint, ipv4, ipv6 });
    } else {
      // Optionally update the user's IP if it's changed
      await collection.updateOne(
        { fingerprint },
        { $set: { ipv4, ipv6, lastVisit: new Date() } }
      );
      console.log("🔄 Updated existing user IPs:", { fingerprint, ipv4, ipv6 });
    }
  } catch (error) {
    console.error("❌ Error registering user:", error);
  }
}
