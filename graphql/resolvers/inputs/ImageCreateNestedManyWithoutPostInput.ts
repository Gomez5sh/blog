import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ImageCreateManyPostInputEnvelope } from "../inputs/ImageCreateManyPostInputEnvelope";
import { ImageCreateOrConnectWithoutPostInput } from "../inputs/ImageCreateOrConnectWithoutPostInput";
import { ImageCreateWithoutPostInput } from "../inputs/ImageCreateWithoutPostInput";
import { ImageWhereUniqueInput } from "../inputs/ImageWhereUniqueInput";

@TypeGraphQL.InputType("ImageCreateNestedManyWithoutPostInput", {})
export class ImageCreateNestedManyWithoutPostInput {
  @TypeGraphQL.Field((_type) => [ImageCreateWithoutPostInput], {
    nullable: true,
  })
  create?: ImageCreateWithoutPostInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ImageCreateOrConnectWithoutPostInput], {
    nullable: true,
  })
  connectOrCreate?: ImageCreateOrConnectWithoutPostInput[] | undefined;

  @TypeGraphQL.Field((_type) => ImageCreateManyPostInputEnvelope, {
    nullable: true,
  })
  createMany?: ImageCreateManyPostInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [ImageWhereUniqueInput], {
    nullable: true,
  })
  connect?: ImageWhereUniqueInput[] | undefined;
}
