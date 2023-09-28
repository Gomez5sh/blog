import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("FileScalarWhereWithAggregatesInput", {})
export class FileScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field((_type) => [FileScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: FileScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [FileScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: FileScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [FileScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: FileScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeWithAggregatesFilter, {
    nullable: true,
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeWithAggregatesFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  url?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  postId?: StringWithAggregatesFilter | undefined;
}
