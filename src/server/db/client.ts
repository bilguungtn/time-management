import { Schema } from "./schemas";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { env } from "@/env.mjs";

const client = postgres(env.DATABASE_URL, {
  max: 1,
  ssl: "require",
});

export const db = drizzle(client, { schema: Schema });
