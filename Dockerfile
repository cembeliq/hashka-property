FROM oven/bun:1.3.13 AS deps
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

FROM oven/bun:1.3.13 AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN bun run build

# Pinned (not `oven/bun:1`, which floats to latest 1.x): Bun 1.3.14 has a
# runtime regression that crashes evaluating Lexical's minified prod bundle
# ("Cannot access 't' before initialization" in LexicalDecoratorBlockNode).
# Confirmed 1.3.13 does not have this bug. Revisit once a newer Bun release
# is verified fixed.
FROM oven/bun:1.3.13 AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV DATABASE_URI=file:./data/payload.db

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.ts ./next.config.ts
COPY --from=builder /app/payload.config.ts ./payload.config.ts
COPY --from=builder /app/lib ./lib
COPY --from=builder /app/scripts ./scripts

# Persisted across deploys: SQLite database and uploaded property images.
# Mount host/named volumes here in production, and supply PAYLOAD_SECRET
# at runtime (e.g. `docker run -e PAYLOAD_SECRET=...`) — never bake it into the image.
RUN mkdir -p /app/data /app/media
VOLUME ["/app/data", "/app/media"]

EXPOSE 3000
CMD ["sh", "-c", "bun run scripts/init-db.ts && bun run start"]
