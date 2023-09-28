import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateCodeArgs } from "./args/AggregateCodeArgs";
import { Code } from "../../../models/Code";
import { AggregateCode } from "../../outputs/AggregateCode";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Code)
export class AggregateCodeResolver {
  @TypeGraphQL.Query((_returns) => AggregateCode, {
    nullable: false,
  })
  async aggregateCode(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateCodeArgs,
  ): Promise<AggregateCode> {
    return getPrismaFromContext(ctx).code.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
