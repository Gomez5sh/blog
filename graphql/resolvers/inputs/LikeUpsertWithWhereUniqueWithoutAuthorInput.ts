import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikeCreateWithoutAuthorInput } from "../inputs/LikeCreateWithoutAuthorInput";
import { LikeUpdateWithoutAuthorInput } from "../inputs/LikeUpdateWithoutAuthorInput";
import { LikeWhereUniqueInput } from "../inputs/LikeWhereUniqueInput";

@TypeGraphQL.InputType("LikeUpsertWithWhereUniqueWithoutAuthorInput", {})
export class LikeUpsertWithWhereUniqueWithoutAuthorInput {
  @TypeGraphQL.Field((_type) => LikeWhereUniqueInput, {
    nullable: false,
  })
  where!: LikeWhereUniqueInput;

  @TypeGraphQL.Field((_type) => LikeUpdateWithoutAuthorInput, {
    nullable: false,
  })
  update!: LikeUpdateWithoutAuthorInput;

  @TypeGraphQL.Field((_type) => LikeCreateWithoutAuthorInput, {
    nullable: false,
  })
  create!: LikeCreateWithoutAuthorInput;
}
