import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AnswerWhereInput } from "../../inputs/AnswerWhereInput";

@TypeGraphQL.ArgsType()
export class UserCountAnswersArgs {
  @TypeGraphQL.Field((_type) => AnswerWhereInput, {
    nullable: true,
  })
  where?: AnswerWhereInput | undefined;
}
