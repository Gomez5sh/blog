import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ImageScalarWhereInput", {})
export class ImageScalarWhereInput {
  @TypeGraphQL.Field((_type) => [ImageScalarWhereInput], {
    nullable: true,
  })
  AND?: ImageScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ImageScalarWhereInput], {
    nullable: true,
  })
  OR?: ImageScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ImageScalarWhereInput], {
    nullable: true,
  })
  NOT?: ImageScalarWhereInput[] | undefined;

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
