import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyCodeArgs } from "./args/CreateManyCodeArgs";
import { Code } from "../../../models/Code";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Code)
export class CreateManyCodeResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyCode(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyCodeArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).code.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
