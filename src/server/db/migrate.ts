import { env } from "@/env.mjs";
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import { Schema } from "./schemas";

const client = postgres(env.DATABASE_URL, {
  max: 1,
  ssl: "require",
});
const db = drizzle(client, { schema: Schema });

const main = async () => {
  try {
    await migrate(db, { migrationsFolder: "drizzle" });
    await client.end();
  } catch (error) {
    console.log(error);
  } finally {
    process.exit(0);
  }
};

void main();
