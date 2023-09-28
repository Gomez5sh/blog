import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOnePollArgs } from "./args/CreateOnePollArgs";
import { Poll } from "../../../models/Poll";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Poll)
export class CreateOnePollResolver {
  @TypeGraphQL.Mutation((_returns) => Poll, {
    nullable: false,
  })
  async createOnePoll(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateOnePollArgs,
  ): Promise<Poll> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).poll.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
