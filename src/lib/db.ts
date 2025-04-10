import { MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI || "";
const DATABASE_NAME = "portfolio";

if (!MONGODB_URI) {
  throw new Error("Please define MONGODB_URI in environment variables");
}

let cachedClient: MongoClient | null = null;

export async function connectToDatabase() {
  if (cachedClient) {
    return cachedClient.db(DATABASE_NAME);
  }

  try {
    console.log("✅ MongoDB Connecting!");
    const client = new MongoClient(MONGODB_URI, {
      serverSelectionTimeoutMS: 5000, // Prevent infinite waiting
      connectTimeoutMS: 10000, // Avoid long connection issues
    });

    await client.connect();
    console.log("✅ MongoDB Connected!");
    
    cachedClient = client;
    return client.db(DATABASE_NAME);
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
  }
}
