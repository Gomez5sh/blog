import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VideoCreateWithoutPostInput } from "../inputs/VideoCreateWithoutPostInput";
import { VideoWhereUniqueInput } from "../inputs/VideoWhereUniqueInput";

@TypeGraphQL.InputType("VideoCreateOrConnectWithoutPostInput", {})
export class VideoCreateOrConnectWithoutPostInput {
  @TypeGraphQL.Field((_type) => VideoWhereUniqueInput, {
    nullable: false,
  })
  where!: VideoWhereUniqueInput;

  @TypeGraphQL.Field((_type) => VideoCreateWithoutPostInput, {
    nullable: false,
  })
  create!: VideoCreateWithoutPostInput;
}
