import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutLikesInput } from "../inputs/UserUpdateWithoutLikesInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutLikesInput", {})
export class UserUpdateToOneWithWhereWithoutLikesInput {
  @TypeGraphQL.Field((_type) => UserWhereInput, {
    nullable: true,
  })
  where?: UserWhereInput | undefined;

  @TypeGraphQL.Field((_type) => UserUpdateWithoutLikesInput, {
    nullable: false,
  })
  data!: UserUpdateWithoutLikesInput;
}
