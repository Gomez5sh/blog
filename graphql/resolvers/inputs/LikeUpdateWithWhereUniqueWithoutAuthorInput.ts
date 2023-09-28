import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikeUpdateWithoutAuthorInput } from "../inputs/LikeUpdateWithoutAuthorInput";
import { LikeWhereUniqueInput } from "../inputs/LikeWhereUniqueInput";

@TypeGraphQL.InputType("LikeUpdateWithWhereUniqueWithoutAuthorInput", {})
export class LikeUpdateWithWhereUniqueWithoutAuthorInput {
  @TypeGraphQL.Field((_type) => LikeWhereUniqueInput, {
    nullable: false,
  })
  where!: LikeWhereUniqueInput;

  @TypeGraphQL.Field((_type) => LikeUpdateWithoutAuthorInput, {
    nullable: false,
  })
  data!: LikeUpdateWithoutAuthorInput;
}
