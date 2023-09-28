import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ImageCreateWithoutPostInput } from "../inputs/ImageCreateWithoutPostInput";
import { ImageWhereUniqueInput } from "../inputs/ImageWhereUniqueInput";

@TypeGraphQL.InputType("ImageCreateOrConnectWithoutPostInput", {})
export class ImageCreateOrConnectWithoutPostInput {
  @TypeGraphQL.Field((_type) => ImageWhereUniqueInput, {
    nullable: false,
  })
  where!: ImageWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ImageCreateWithoutPostInput, {
    nullable: false,
  })
  create!: ImageCreateWithoutPostInput;
}
