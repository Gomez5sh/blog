import { prismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma?: prismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new prismaClient({
    log: ["query", "info", "warn"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
