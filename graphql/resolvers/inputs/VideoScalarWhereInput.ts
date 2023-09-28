import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("VideoScalarWhereInput", {})
export class VideoScalarWhereInput {
  @TypeGraphQL.Field((_type) => [VideoScalarWhereInput], {
    nullable: true,
  })
  AND?: VideoScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [VideoScalarWhereInput], {
    nullable: true,
  })
  OR?: VideoScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [VideoScalarWhereInput], {
    nullable: true,
  })
  NOT?: VideoScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  url?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  postId?: StringFilter | undefined;
}
