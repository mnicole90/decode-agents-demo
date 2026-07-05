# Setup « from scratch » (référence formateur)

> Recette **validée** (dry-run) : Next.js + Prisma (SQLite) + Vitest. À rejouer en démo live.

## ⚠️ Gotchas connus
- **Prisma 7 casse la migration** → **pin Prisma 6** (`npm i -D prisma@^6` + `npm i @prisma/client@^6`).
- **SQLite** : `DATABASE_URL="file:./dev.db"` → base à `prisma/dev.db` (résolu relativement au schéma).
- **Codespaces** : sans `.devcontainer`, le Node par défaut peut être trop vieux → on épingle **Node 20** via `.devcontainer/devcontainer.json`.

## Recette
```bash
# 1. Scaffold
npx create-next-app@latest agents-demo \
  --ts --app --no-src-dir --no-tailwind --eslint --no-turbopack \
  --import-alias "@/*" --use-npm
cd agents-demo

# 2. Prisma 6 (PAS 7) + Vitest + tsx
npm install prisma@^6 @prisma/client@^6
npm install -D vitest tsx dotenv
npx prisma init --datasource-provider sqlite

# 3. schema.prisma (model Agent) + .env (DATABASE_URL="file:./dev.db")
# 4. Migration
npx prisma migrate dev --name init

# 5. Code : lib/domain/agent.ts (+ test), lib/prisma.ts, app/page.tsx, prisma/seed.ts
# 6. Vérifs
npx vitest run          # TDD vert
npx tsx prisma/seed.ts  # 3 agents
npm run dev             # http://localhost:3000
```

Le code complet des fichiers est dans ce repo (branche `main`).
