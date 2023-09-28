import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutAnswersInput } from "../inputs/UserCreateWithoutAnswersInput";
import { UserUpdateWithoutAnswersInput } from "../inputs/UserUpdateWithoutAnswersInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpsertWithoutAnswersInput", {})
export class UserUpsertWithoutAnswersInput {
  @TypeGraphQL.Field((_type) => UserUpdateWithoutAnswersInput, {
    nullable: false,
  })
  update!: UserUpdateWithoutAnswersInput;

  @TypeGraphQL.Field((_type) => UserCreateWithoutAnswersInput, {
    nullable: false,
  })
  create!: UserCreateWithoutAnswersInput;

  @TypeGraphQL.Field((_type) => UserWhereInput, {
    nullable: true,
  })
  where?: UserWhereInput | undefined;
}
