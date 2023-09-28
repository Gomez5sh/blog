import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProfileUpdateWithoutUserInput } from "../inputs/ProfileUpdateWithoutUserInput";
import { ProfileWhereInput } from "../inputs/ProfileWhereInput";

@TypeGraphQL.InputType("ProfileUpdateToOneWithWhereWithoutUserInput", {})
export class ProfileUpdateToOneWithWhereWithoutUserInput {
  @TypeGraphQL.Field((_type) => ProfileWhereInput, {
    nullable: true,
  })
  where?: ProfileWhereInput | undefined;

  @TypeGraphQL.Field((_type) => ProfileUpdateWithoutUserInput, {
    nullable: false,
  })
  data!: ProfileUpdateWithoutUserInput;
}
