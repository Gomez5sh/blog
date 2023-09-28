import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryWhereInput } from "../inputs/CategoryWhereInput";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { PostListRelationFilter } from "../inputs/PostListRelationFilter";

@TypeGraphQL.InputType("CategoryWhereUniqueInput", {})
export class CategoryWhereUniqueInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  name?: string | undefined;

  @TypeGraphQL.Field((_type) => [CategoryWhereInput], {
    nullable: true,
  })
  AND?: CategoryWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CategoryWhereInput], {
    nullable: true,
  })
  OR?: CategoryWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CategoryWhereInput], {
    nullable: true,
  })
  NOT?: CategoryWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => PostListRelationFilter, {
    nullable: true,
  })
  posts?: PostListRelationFilter | undefined;
}
