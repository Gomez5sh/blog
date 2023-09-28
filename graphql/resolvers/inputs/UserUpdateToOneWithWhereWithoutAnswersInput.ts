import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutAnswersInput } from "../inputs/UserUpdateWithoutAnswersInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutAnswersInput", {})
export class UserUpdateToOneWithWhereWithoutAnswersInput {
  @TypeGraphQL.Field((_type) => UserWhereInput, {
    nullable: true,
  })
  where?: UserWhereInput | undefined;

  @TypeGraphQL.Field((_type) => UserUpdateWithoutAnswersInput, {
    nullable: false,
  })
  data!: UserUpdateWithoutAnswersInput;
}
