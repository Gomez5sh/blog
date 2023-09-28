import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VideoCreateWithoutPostInput } from "../inputs/VideoCreateWithoutPostInput";
import { VideoUpdateWithoutPostInput } from "../inputs/VideoUpdateWithoutPostInput";
import { VideoWhereUniqueInput } from "../inputs/VideoWhereUniqueInput";

@TypeGraphQL.InputType("VideoUpsertWithWhereUniqueWithoutPostInput", {})
export class VideoUpsertWithWhereUniqueWithoutPostInput {
  @TypeGraphQL.Field((_type) => VideoWhereUniqueInput, {
    nullable: false,
  })
  where!: VideoWhereUniqueInput;

  @TypeGraphQL.Field((_type) => VideoUpdateWithoutPostInput, {
    nullable: false,
  })
  update!: VideoUpdateWithoutPostInput;

  @TypeGraphQL.Field((_type) => VideoCreateWithoutPostInput, {
    nullable: false,
  })
  create!: VideoCreateWithoutPostInput;
}
