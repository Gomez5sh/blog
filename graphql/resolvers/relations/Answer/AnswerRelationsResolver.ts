import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Answer } from "../../../models/Answer";
import { Question } from "../../../models/Question";
import { User } from "../../../models/User";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Answer)
export class AnswerRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => Question, {
    nullable: false,
  })
  async question(
    @TypeGraphQL.Root() answer: Answer,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
  ): Promise<Question> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .answer.findUniqueOrThrow({
        where: {
          id: answer.id,
        },
      })
      .question({
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }

  @TypeGraphQL.FieldResolver((_type) => User, {
    nullable: false,
  })
  async author(
    @TypeGraphQL.Root() answer: Answer,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
  ): Promise<User> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .answer.findUniqueOrThrow({
        where: {
          id: answer.id,
        },
      })
      .author({
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }
}
