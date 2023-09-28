import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateNestedOneWithoutQuotesInput } from "../inputs/PostCreateNestedOneWithoutQuotesInput";

@TypeGraphQL.InputType("QuoteCreateInput", {})
export class QuoteCreateInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  content!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  author!: string;

  @TypeGraphQL.Field((_type) => PostCreateNestedOneWithoutQuotesInput, {
    nullable: false,
  })
  post!: PostCreateNestedOneWithoutQuotesInput;
}
