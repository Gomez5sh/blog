import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProfileCreateOrConnectWithoutUserInput } from "../inputs/ProfileCreateOrConnectWithoutUserInput";
import { ProfileCreateWithoutUserInput } from "../inputs/ProfileCreateWithoutUserInput";
import { ProfileUpdateToOneWithWhereWithoutUserInput } from "../inputs/ProfileUpdateToOneWithWhereWithoutUserInput";
import { ProfileUpsertWithoutUserInput } from "../inputs/ProfileUpsertWithoutUserInput";
import { ProfileWhereInput } from "../inputs/ProfileWhereInput";
import { ProfileWhereUniqueInput } from "../inputs/ProfileWhereUniqueInput";

@TypeGraphQL.InputType("ProfileUpdateOneWithoutUserNestedInput", {})
export class ProfileUpdateOneWithoutUserNestedInput {
  @TypeGraphQL.Field((_type) => ProfileCreateWithoutUserInput, {
    nullable: true,
  })
  create?: ProfileCreateWithoutUserInput | undefined;

  @TypeGraphQL.Field((_type) => ProfileCreateOrConnectWithoutUserInput, {
    nullable: true,
  })
  connectOrCreate?: ProfileCreateOrConnectWithoutUserInput | undefined;

  @TypeGraphQL.Field((_type) => ProfileUpsertWithoutUserInput, {
    nullable: true,
  })
  upsert?: ProfileUpsertWithoutUserInput | undefined;

  @TypeGraphQL.Field((_type) => ProfileWhereInput, {
    nullable: true,
  })
  disconnect?: ProfileWhereInput | undefined;

  @TypeGraphQL.Field((_type) => ProfileWhereInput, {
    nullable: true,
  })
  delete?: ProfileWhereInput | undefined;

  @TypeGraphQL.Field((_type) => ProfileWhereUniqueInput, {
    nullable: true,
  })
  connect?: ProfileWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => ProfileUpdateToOneWithWhereWithoutUserInput, {
    nullable: true,
  })
  update?: ProfileUpdateToOneWithWhereWithoutUserInput | undefined;
}
