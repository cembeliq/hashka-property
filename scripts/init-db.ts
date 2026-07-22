// Payload's SQLite adapter only auto-creates tables when NODE_ENV is not
// "production" (see @payloadcms/db-sqlite/dist/connect.js). Our Docker image
// runs with NODE_ENV=production for the app itself, so on a fresh volume
// (empty payload.db) no tables ever get created and every query 500s with
// "no such table". Run this once before `next start` to sync the schema.
//
// This is safe to run on every container start: once the schema matches,
// Payload detects no changes and skips the push (near-instant no-op).
(process.env as Record<string, string>).NODE_ENV = "development";

import { getPayload } from "payload";
import config from "../payload.config";

async function run() {
  await getPayload({ config });
  console.log("Database schema is up to date.");
  process.exit(0);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
