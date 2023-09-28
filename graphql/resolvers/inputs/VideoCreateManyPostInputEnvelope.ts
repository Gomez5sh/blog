import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VideoCreateManyPostInput } from "../inputs/VideoCreateManyPostInput";

@TypeGraphQL.InputType("VideoCreateManyPostInputEnvelope", {})
export class VideoCreateManyPostInputEnvelope {
  @TypeGraphQL.Field((_type) => [VideoCreateManyPostInput], {
    nullable: false,
  })
  data!: VideoCreateManyPostInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
