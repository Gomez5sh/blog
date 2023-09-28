import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VideoWhereInput } from "../inputs/VideoWhereInput";

@TypeGraphQL.InputType("VideoListRelationFilter", {})
export class VideoListRelationFilter {
  @TypeGraphQL.Field((_type) => VideoWhereInput, {
    nullable: true,
  })
  every?: VideoWhereInput | undefined;

  @TypeGraphQL.Field((_type) => VideoWhereInput, {
    nullable: true,
  })
  some?: VideoWhereInput | undefined;

  @TypeGraphQL.Field((_type) => VideoWhereInput, {
    nullable: true,
  })
  none?: VideoWhereInput | undefined;
}
