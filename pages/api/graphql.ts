import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { prisma } from "../../prisma/db";

import { PrismaClient } from "@prisma/client";

export type Context = {
  prisma: PrismaClient;
};

const apolloServer = new ApolloServer<Context>({
  // typeDefs
  // resolvers
});

export default startServerAndCreateNextHandler(apolloServer, {
  context: async (req, res) => ({ req, res, prisma }),
});
