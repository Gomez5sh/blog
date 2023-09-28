import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VideoUpdateWithoutPostInput } from "../inputs/VideoUpdateWithoutPostInput";
import { VideoWhereUniqueInput } from "../inputs/VideoWhereUniqueInput";

@TypeGraphQL.InputType("VideoUpdateWithWhereUniqueWithoutPostInput", {})
export class VideoUpdateWithWhereUniqueWithoutPostInput {
  @TypeGraphQL.Field((_type) => VideoWhereUniqueInput, {
    nullable: false,
  })
  where!: VideoWhereUniqueInput;

  @TypeGraphQL.Field((_type) => VideoUpdateWithoutPostInput, {
    nullable: false,
  })
  data!: VideoUpdateWithoutPostInput;
}
