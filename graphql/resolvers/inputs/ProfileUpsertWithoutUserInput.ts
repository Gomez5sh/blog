import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProfileCreateWithoutUserInput } from "../inputs/ProfileCreateWithoutUserInput";
import { ProfileUpdateWithoutUserInput } from "../inputs/ProfileUpdateWithoutUserInput";
import { ProfileWhereInput } from "../inputs/ProfileWhereInput";

@TypeGraphQL.InputType("ProfileUpsertWithoutUserInput", {})
export class ProfileUpsertWithoutUserInput {
  @TypeGraphQL.Field((_type) => ProfileUpdateWithoutUserInput, {
    nullable: false,
  })
  update!: ProfileUpdateWithoutUserInput;

  @TypeGraphQL.Field((_type) => ProfileCreateWithoutUserInput, {
    nullable: false,
  })
  create!: ProfileCreateWithoutUserInput;

  @TypeGraphQL.Field((_type) => ProfileWhereInput, {
    nullable: true,
  })
  where?: ProfileWhereInput | undefined;
}
