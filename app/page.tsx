import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function Home() {
  const agents = await prisma.agent.findMany({ orderBy: { createdAt: "asc" } });

  return (
    <main style={{ padding: 32, fontFamily: "system-ui, sans-serif", maxWidth: 640, margin: "0 auto" }}>
      <h1>🤖 Liste des agents</h1>
      <p style={{ color: "#666" }}>{agents.length} agent(s) — source : SQLite via Prisma</p>
      <ul style={{ lineHeight: 1.8 }}>
        {agents.map((a) => (
          <li key={a.id} data-testid="agent">
            <strong>{a.name}</strong> — {a.role}{" "}
            <em style={{ color: a.status === "active" ? "green" : "#999" }}>({a.status})</em>
          </li>
        ))}
      </ul>
    </main>
  );
}
