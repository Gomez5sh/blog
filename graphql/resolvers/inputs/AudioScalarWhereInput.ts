import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("AudioScalarWhereInput", {})
export class AudioScalarWhereInput {
  @TypeGraphQL.Field((_type) => [AudioScalarWhereInput], {
    nullable: true,
  })
  AND?: AudioScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AudioScalarWhereInput], {
    nullable: true,
  })
  OR?: AudioScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AudioScalarWhereInput], {
    nullable: true,
  })
  NOT?: AudioScalarWhereInput[] | undefined;

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
