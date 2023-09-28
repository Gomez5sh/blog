import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ImageUpdateWithoutPostInput } from "../inputs/ImageUpdateWithoutPostInput";
import { ImageWhereUniqueInput } from "../inputs/ImageWhereUniqueInput";

@TypeGraphQL.InputType("ImageUpdateWithWhereUniqueWithoutPostInput", {})
export class ImageUpdateWithWhereUniqueWithoutPostInput {
  @TypeGraphQL.Field((_type) => ImageWhereUniqueInput, {
    nullable: false,
  })
  where!: ImageWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ImageUpdateWithoutPostInput, {
    nullable: false,
  })
  data!: ImageUpdateWithoutPostInput;
}
