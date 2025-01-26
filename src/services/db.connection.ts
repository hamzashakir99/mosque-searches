import { Db, MongoClient } from "mongodb";
let client: MongoClient | null = null;

export async function dbConnection() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if ((client as any)?.topology?.isConnected()) {
    console.log("Using existing connection");
    const db = client?.db("mosque-searches");
    return { db, client } as {
      db: Db;
      client: MongoClient;
    };
  }
  console.log("Creating new connection");
  client = new MongoClient(process.env.MONGODB_URI?.toString() ?? "");
  await client.connect();
  const db = client.db("mosque-searches");
  return { db, client };
}
