import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VideoCreateManyPostInputEnvelope } from "../inputs/VideoCreateManyPostInputEnvelope";
import { VideoCreateOrConnectWithoutPostInput } from "../inputs/VideoCreateOrConnectWithoutPostInput";
import { VideoCreateWithoutPostInput } from "../inputs/VideoCreateWithoutPostInput";
import { VideoScalarWhereInput } from "../inputs/VideoScalarWhereInput";
import { VideoUpdateManyWithWhereWithoutPostInput } from "../inputs/VideoUpdateManyWithWhereWithoutPostInput";
import { VideoUpdateWithWhereUniqueWithoutPostInput } from "../inputs/VideoUpdateWithWhereUniqueWithoutPostInput";
import { VideoUpsertWithWhereUniqueWithoutPostInput } from "../inputs/VideoUpsertWithWhereUniqueWithoutPostInput";
import { VideoWhereUniqueInput } from "../inputs/VideoWhereUniqueInput";

@TypeGraphQL.InputType("VideoUpdateManyWithoutPostNestedInput", {})
export class VideoUpdateManyWithoutPostNestedInput {
  @TypeGraphQL.Field((_type) => [VideoCreateWithoutPostInput], {
    nullable: true,
  })
  create?: VideoCreateWithoutPostInput[] | undefined;

  @TypeGraphQL.Field((_type) => [VideoCreateOrConnectWithoutPostInput], {
    nullable: true,
  })
  connectOrCreate?: VideoCreateOrConnectWithoutPostInput[] | undefined;

  @TypeGraphQL.Field((_type) => [VideoUpsertWithWhereUniqueWithoutPostInput], {
    nullable: true,
  })
  upsert?: VideoUpsertWithWhereUniqueWithoutPostInput[] | undefined;

  @TypeGraphQL.Field((_type) => VideoCreateManyPostInputEnvelope, {
    nullable: true,
  })
  createMany?: VideoCreateManyPostInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [VideoWhereUniqueInput], {
    nullable: true,
  })
  set?: VideoWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [VideoWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: VideoWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [VideoWhereUniqueInput], {
    nullable: true,
  })
  delete?: VideoWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [VideoWhereUniqueInput], {
    nullable: true,
  })
  connect?: VideoWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [VideoUpdateWithWhereUniqueWithoutPostInput], {
    nullable: true,
  })
  update?: VideoUpdateWithWhereUniqueWithoutPostInput[] | undefined;

  @TypeGraphQL.Field((_type) => [VideoUpdateManyWithWhereWithoutPostInput], {
    nullable: true,
  })
  updateMany?: VideoUpdateManyWithWhereWithoutPostInput[] | undefined;

  @TypeGraphQL.Field((_type) => [VideoScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: VideoScalarWhereInput[] | undefined;
}
