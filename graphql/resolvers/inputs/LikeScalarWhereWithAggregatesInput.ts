import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("LikeScalarWhereWithAggregatesInput", {})
export class LikeScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field((_type) => [LikeScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: LikeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [LikeScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: LikeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [LikeScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: LikeScalarWhereWithAggregatesInput[] | undefined;

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
  postId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  authorId?: StringWithAggregatesFilter | undefined;
}
