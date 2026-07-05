import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.agent.deleteMany();
  await prisma.agent.createMany({
    data: [
      { name: "Louis", role: "PM", status: "active" },
      { name: "e-mailer-dev", role: "Dev", status: "active" },
      { name: "ekho-dev", role: "Dev", status: "idle" },
    ],
  });
  console.log("Seed OK — 3 agents insérés");
}

main().finally(() => prisma.$disconnect());
