import * as auth from "./auth";
import * as posts from "./posts";

export * from "@/server/db/schemas/posts";
export * from "@/server/db/schemas/auth";

export const Schema = { ...auth, ...posts };
export type Schema = typeof Schema;
