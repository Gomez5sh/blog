import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ImageCreateManyPostInput } from "../inputs/ImageCreateManyPostInput";

@TypeGraphQL.InputType("ImageCreateManyPostInputEnvelope", {})
export class ImageCreateManyPostInputEnvelope {
  @TypeGraphQL.Field((_type) => [ImageCreateManyPostInput], {
    nullable: false,
  })
  data!: ImageCreateManyPostInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
