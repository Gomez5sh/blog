import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutAnswersInput } from "../inputs/UserCreateOrConnectWithoutAnswersInput";
import { UserCreateWithoutAnswersInput } from "../inputs/UserCreateWithoutAnswersInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutAnswersInput", {})
export class UserCreateNestedOneWithoutAnswersInput {
  @TypeGraphQL.Field((_type) => UserCreateWithoutAnswersInput, {
    nullable: true,
  })
  create?: UserCreateWithoutAnswersInput | undefined;

  @TypeGraphQL.Field((_type) => UserCreateOrConnectWithoutAnswersInput, {
    nullable: true,
  })
  connectOrCreate?: UserCreateOrConnectWithoutAnswersInput | undefined;

  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, {
    nullable: true,
  })
  connect?: UserWhereUniqueInput | undefined;
}
