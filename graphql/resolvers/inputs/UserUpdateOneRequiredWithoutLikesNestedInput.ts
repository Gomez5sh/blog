import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutLikesInput } from "../inputs/UserCreateOrConnectWithoutLikesInput";
import { UserCreateWithoutLikesInput } from "../inputs/UserCreateWithoutLikesInput";
import { UserUpdateToOneWithWhereWithoutLikesInput } from "../inputs/UserUpdateToOneWithWhereWithoutLikesInput";
import { UserUpsertWithoutLikesInput } from "../inputs/UserUpsertWithoutLikesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutLikesNestedInput", {})
export class UserUpdateOneRequiredWithoutLikesNestedInput {
  @TypeGraphQL.Field((_type) => UserCreateWithoutLikesInput, {
    nullable: true,
  })
  create?: UserCreateWithoutLikesInput | undefined;

  @TypeGraphQL.Field((_type) => UserCreateOrConnectWithoutLikesInput, {
    nullable: true,
  })
  connectOrCreate?: UserCreateOrConnectWithoutLikesInput | undefined;

  @TypeGraphQL.Field((_type) => UserUpsertWithoutLikesInput, {
    nullable: true,
  })
  upsert?: UserUpsertWithoutLikesInput | undefined;

  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, {
    nullable: true,
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => UserUpdateToOneWithWhereWithoutLikesInput, {
    nullable: true,
  })
  update?: UserUpdateToOneWithWhereWithoutLikesInput | undefined;
}
