import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutAnswersInput } from "../inputs/UserCreateOrConnectWithoutAnswersInput";
import { UserCreateWithoutAnswersInput } from "../inputs/UserCreateWithoutAnswersInput";
import { UserUpdateToOneWithWhereWithoutAnswersInput } from "../inputs/UserUpdateToOneWithWhereWithoutAnswersInput";
import { UserUpsertWithoutAnswersInput } from "../inputs/UserUpsertWithoutAnswersInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutAnswersNestedInput", {})
export class UserUpdateOneRequiredWithoutAnswersNestedInput {
  @TypeGraphQL.Field((_type) => UserCreateWithoutAnswersInput, {
    nullable: true,
  })
  create?: UserCreateWithoutAnswersInput | undefined;

  @TypeGraphQL.Field((_type) => UserCreateOrConnectWithoutAnswersInput, {
    nullable: true,
  })
  connectOrCreate?: UserCreateOrConnectWithoutAnswersInput | undefined;

  @TypeGraphQL.Field((_type) => UserUpsertWithoutAnswersInput, {
    nullable: true,
  })
  upsert?: UserUpsertWithoutAnswersInput | undefined;

  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, {
    nullable: true,
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => UserUpdateToOneWithWhereWithoutAnswersInput, {
    nullable: true,
  })
  update?: UserUpdateToOneWithWhereWithoutAnswersInput | undefined;
}
