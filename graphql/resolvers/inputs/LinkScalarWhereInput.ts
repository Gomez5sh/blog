import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("LinkScalarWhereInput", {})
export class LinkScalarWhereInput {
  @TypeGraphQL.Field((_type) => [LinkScalarWhereInput], {
    nullable: true,
  })
  AND?: LinkScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [LinkScalarWhereInput], {
    nullable: true,
  })
  OR?: LinkScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [LinkScalarWhereInput], {
    nullable: true,
  })
  NOT?: LinkScalarWhereInput[] | undefined;

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
