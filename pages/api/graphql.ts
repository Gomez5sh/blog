import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { prisma } from "../../prisma/db";
import {} from "../../graphql/";

import { PrismaClient } from "@prisma/client";
import { resolvers } from "../../graphql";
import { buildSchema } from "type-graphql";

export type Context = {
  prisma: PrismaClient;
};

const schema = await buildSchema({
  resolvers,
  validate: false,
});

const apolloServer = new ApolloServer<Context>({
  schema,
});

export default startServerAndCreateNextHandler(apolloServer, {
  context: async (req, res) => ({ req, res, prisma }),
});
