import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutQuotesInput } from "../inputs/PostCreateWithoutQuotesInput";
import { PostUpdateWithoutQuotesInput } from "../inputs/PostUpdateWithoutQuotesInput";
import { PostWhereInput } from "../inputs/PostWhereInput";

@TypeGraphQL.InputType("PostUpsertWithoutQuotesInput", {})
export class PostUpsertWithoutQuotesInput {
  @TypeGraphQL.Field((_type) => PostUpdateWithoutQuotesInput, {
    nullable: false,
  })
  update!: PostUpdateWithoutQuotesInput;

  @TypeGraphQL.Field((_type) => PostCreateWithoutQuotesInput, {
    nullable: false,
  })
  create!: PostCreateWithoutQuotesInput;

  @TypeGraphQL.Field((_type) => PostWhereInput, {
    nullable: true,
  })
  where?: PostWhereInput | undefined;
}
