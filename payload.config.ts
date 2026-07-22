import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildConfig } from "payload";
import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import sharp from "sharp";

import { Users } from "./lib/cms/collections/Users";
import { Media } from "./lib/cms/collections/Media";
import { Properties } from "./lib/cms/collections/Properties";
import { Testimonials } from "./lib/cms/collections/Testimonials";
import { FaqItems } from "./lib/cms/collections/FaqItems";

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || "",
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || "file:./data/payload.db",
    },
  }),
  editor: lexicalEditor(),
  collections: [Users, Media, Properties, Testimonials, FaqItems],
  admin: {
    user: Users.slug,
    components: {
      logout: {
        Button: "/lib/cms/components/LogoutButton#LogoutButton",
      },
    },
  },
  typescript: {
    outputFile: path.resolve(dirname, "lib/cms/payload-types.ts"),
  },
  sharp,
});
