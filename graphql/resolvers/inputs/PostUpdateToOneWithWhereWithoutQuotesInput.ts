import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostUpdateWithoutQuotesInput } from "../inputs/PostUpdateWithoutQuotesInput";
import { PostWhereInput } from "../inputs/PostWhereInput";

@TypeGraphQL.InputType("PostUpdateToOneWithWhereWithoutQuotesInput", {})
export class PostUpdateToOneWithWhereWithoutQuotesInput {
  @TypeGraphQL.Field((_type) => PostWhereInput, {
    nullable: true,
  })
  where?: PostWhereInput | undefined;

  @TypeGraphQL.Field((_type) => PostUpdateWithoutQuotesInput, {
    nullable: false,
  })
  data!: PostUpdateWithoutQuotesInput;
}
