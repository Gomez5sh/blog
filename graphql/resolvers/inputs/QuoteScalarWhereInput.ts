import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("QuoteScalarWhereInput", {})
export class QuoteScalarWhereInput {
  @TypeGraphQL.Field((_type) => [QuoteScalarWhereInput], {
    nullable: true,
  })
  AND?: QuoteScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [QuoteScalarWhereInput], {
    nullable: true,
  })
  OR?: QuoteScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [QuoteScalarWhereInput], {
    nullable: true,
  })
  NOT?: QuoteScalarWhereInput[] | undefined;

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
  content?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  author?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  postId?: StringFilter | undefined;
}
