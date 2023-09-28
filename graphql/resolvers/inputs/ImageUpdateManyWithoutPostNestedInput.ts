import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ImageCreateManyPostInputEnvelope } from "../inputs/ImageCreateManyPostInputEnvelope";
import { ImageCreateOrConnectWithoutPostInput } from "../inputs/ImageCreateOrConnectWithoutPostInput";
import { ImageCreateWithoutPostInput } from "../inputs/ImageCreateWithoutPostInput";
import { ImageScalarWhereInput } from "../inputs/ImageScalarWhereInput";
import { ImageUpdateManyWithWhereWithoutPostInput } from "../inputs/ImageUpdateManyWithWhereWithoutPostInput";
import { ImageUpdateWithWhereUniqueWithoutPostInput } from "../inputs/ImageUpdateWithWhereUniqueWithoutPostInput";
import { ImageUpsertWithWhereUniqueWithoutPostInput } from "../inputs/ImageUpsertWithWhereUniqueWithoutPostInput";
import { ImageWhereUniqueInput } from "../inputs/ImageWhereUniqueInput";

@TypeGraphQL.InputType("ImageUpdateManyWithoutPostNestedInput", {})
export class ImageUpdateManyWithoutPostNestedInput {
  @TypeGraphQL.Field((_type) => [ImageCreateWithoutPostInput], {
    nullable: true,
  })
  create?: ImageCreateWithoutPostInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ImageCreateOrConnectWithoutPostInput], {
    nullable: true,
  })
  connectOrCreate?: ImageCreateOrConnectWithoutPostInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ImageUpsertWithWhereUniqueWithoutPostInput], {
    nullable: true,
  })
  upsert?: ImageUpsertWithWhereUniqueWithoutPostInput[] | undefined;

  @TypeGraphQL.Field((_type) => ImageCreateManyPostInputEnvelope, {
    nullable: true,
  })
  createMany?: ImageCreateManyPostInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [ImageWhereUniqueInput], {
    nullable: true,
  })
  set?: ImageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ImageWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: ImageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ImageWhereUniqueInput], {
    nullable: true,
  })
  delete?: ImageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ImageWhereUniqueInput], {
    nullable: true,
  })
  connect?: ImageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ImageUpdateWithWhereUniqueWithoutPostInput], {
    nullable: true,
  })
  update?: ImageUpdateWithWhereUniqueWithoutPostInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ImageUpdateManyWithWhereWithoutPostInput], {
    nullable: true,
  })
  updateMany?: ImageUpdateManyWithWhereWithoutPostInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ImageScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: ImageScalarWhereInput[] | undefined;
}
