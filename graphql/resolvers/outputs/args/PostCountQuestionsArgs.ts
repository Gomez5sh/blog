import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { QuestionWhereInput } from "../../inputs/QuestionWhereInput";

@TypeGraphQL.ArgsType()
export class PostCountQuestionsArgs {
  @TypeGraphQL.Field((_type) => QuestionWhereInput, {
    nullable: true,
  })
  where?: QuestionWhereInput | undefined;
}
