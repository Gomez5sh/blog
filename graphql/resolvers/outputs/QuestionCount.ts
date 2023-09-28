import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { QuestionCountAnswerArgs } from "./args/QuestionCountAnswerArgs";

@TypeGraphQL.ObjectType("QuestionCount", {})
export class QuestionCount {
  Answer!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: "Answer",
    nullable: false,
  })
  getAnswer(
    @TypeGraphQL.Root() root: QuestionCount,
    @TypeGraphQL.Args() args: QuestionCountAnswerArgs,
  ): number {
    return root.Answer;
  }
}
