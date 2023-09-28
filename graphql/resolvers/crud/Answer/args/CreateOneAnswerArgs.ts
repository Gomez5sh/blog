import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AnswerCreateInput } from "../../../inputs/AnswerCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneAnswerArgs {
  @TypeGraphQL.Field((_type) => AnswerCreateInput, {
    nullable: false,
  })
  data!: AnswerCreateInput;
}
