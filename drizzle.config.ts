import { env } from "@/env.mjs";
import type { Config } from "drizzle-kit";

export default {
  schema: "./src/server/db/schemas/*",
  out: "./src/server/db/drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: env.DATABASE_URL + `?sslmode=require`,
  },
} satisfies Config;
