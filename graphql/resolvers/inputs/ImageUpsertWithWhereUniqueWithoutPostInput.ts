import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ImageCreateWithoutPostInput } from "../inputs/ImageCreateWithoutPostInput";
import { ImageUpdateWithoutPostInput } from "../inputs/ImageUpdateWithoutPostInput";
import { ImageWhereUniqueInput } from "../inputs/ImageWhereUniqueInput";

@TypeGraphQL.InputType("ImageUpsertWithWhereUniqueWithoutPostInput", {})
export class ImageUpsertWithWhereUniqueWithoutPostInput {
  @TypeGraphQL.Field((_type) => ImageWhereUniqueInput, {
    nullable: false,
  })
  where!: ImageWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ImageUpdateWithoutPostInput, {
    nullable: false,
  })
  update!: ImageUpdateWithoutPostInput;

  @TypeGraphQL.Field((_type) => ImageCreateWithoutPostInput, {
    nullable: false,
  })
  create!: ImageCreateWithoutPostInput;
}
