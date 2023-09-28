import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VideoScalarWhereInput } from "../inputs/VideoScalarWhereInput";
import { VideoUpdateManyMutationInput } from "../inputs/VideoUpdateManyMutationInput";

@TypeGraphQL.InputType("VideoUpdateManyWithWhereWithoutPostInput", {})
export class VideoUpdateManyWithWhereWithoutPostInput {
  @TypeGraphQL.Field((_type) => VideoScalarWhereInput, {
    nullable: false,
  })
  where!: VideoScalarWhereInput;

  @TypeGraphQL.Field((_type) => VideoUpdateManyMutationInput, {
    nullable: false,
  })
  data!: VideoUpdateManyMutationInput;
}
