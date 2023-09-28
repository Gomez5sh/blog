import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { LikeWhereInput } from "../inputs/LikeWhereInput";
import { PostRelationFilter } from "../inputs/PostRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("LikeWhereUniqueInput", {})
export class LikeWhereUniqueInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;

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
