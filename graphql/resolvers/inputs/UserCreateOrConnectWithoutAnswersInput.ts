import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutAnswersInput } from "../inputs/UserCreateWithoutAnswersInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutAnswersInput", {})
export class UserCreateOrConnectWithoutAnswersInput {
  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, {
    nullable: false,
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field((_type) => UserCreateWithoutAnswersInput, {
    nullable: false,
  })
  create!: UserCreateWithoutAnswersInput;
}
