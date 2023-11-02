import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import { env } from "@/env.mjs";

const connection = await mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: env.DATABASE_USERNAME,
  password: env.DATABASE_PASSWORD,
  database: "time_management",
});

export const db = drizzle(connection);
