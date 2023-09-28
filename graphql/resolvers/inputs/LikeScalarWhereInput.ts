import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("LikeScalarWhereInput", {})
export class LikeScalarWhereInput {
  @TypeGraphQL.Field((_type) => [LikeScalarWhereInput], {
    nullable: true,
  })
  AND?: LikeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [LikeScalarWhereInput], {
    nullable: true,
  })
  OR?: LikeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [LikeScalarWhereInput], {
    nullable: true,
  })
  NOT?: LikeScalarWhereInput[] | undefined;

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
}
