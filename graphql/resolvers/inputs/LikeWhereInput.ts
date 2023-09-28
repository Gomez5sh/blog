import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { PostRelationFilter } from "../inputs/PostRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("LikeWhereInput", {})
export class LikeWhereInput {
  @TypeGraphQL.Field((_type) => [LikeWhereInput], {
    nullable: true,
  })
  AND?: LikeWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [LikeWhereInput], {
    nullable: true,
  })
  OR?: LikeWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [LikeWhereInput], {
    nullable: true,
  })
  NOT?: LikeWhereInput[] | undefined;

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
  postId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  authorId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => PostRelationFilter, {
    nullable: true,
  })
  post?: PostRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => UserRelationFilter, {
    nullable: true,
  })
  author?: UserRelationFilter | undefined;
}
