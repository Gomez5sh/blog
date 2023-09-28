import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { PostRelationFilter } from "../inputs/PostRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";

@TypeGraphQL.InputType("PollWhereInput", {})
export class PollWhereInput {
  @TypeGraphQL.Field((_type) => [PollWhereInput], {
    nullable: true,
  })
  AND?: PollWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PollWhereInput], {
    nullable: true,
  })
  OR?: PollWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PollWhereInput], {
    nullable: true,
  })
  NOT?: PollWhereInput[] | undefined;

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
  question?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableListFilter, {
    nullable: true,
  })
  options?: StringNullableListFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  postId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => PostRelationFilter, {
    nullable: true,
  })
  post?: PostRelationFilter | undefined;
}
