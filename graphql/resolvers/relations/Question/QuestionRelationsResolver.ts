import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Answer } from "../../../models/Answer";
import { Post } from "../../../models/Post";
import { Question } from "../../../models/Question";
import { QuestionAnswerArgs } from "./args/QuestionAnswerArgs";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Question)
export class QuestionRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => Post, {
    nullable: false,
  })
  async post(
    @TypeGraphQL.Root() question: Question,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
  ): Promise<Post> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .question.findUniqueOrThrow({
        where: {
          id: question.id,
        },
      })
      .post({
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }

  @TypeGraphQL.FieldResolver((_type) => [Answer], {
    nullable: false,
  })
  async Answer(
    @TypeGraphQL.Root() question: Question,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: QuestionAnswerArgs,
  ): Promise<Answer[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .question.findUniqueOrThrow({
        where: {
          id: question.id,
        },
      })
      .Answer({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }
}
