import { env } from "@/env.mjs";
import type { Config } from "drizzle-kit";

export default {
  schema: "./schemas/*",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: env.DATABASE_URL + `?sslmode=require`,
  },
} satisfies Config;
