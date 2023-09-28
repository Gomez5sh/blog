import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutLinksInput } from "../inputs/PostCreateWithoutLinksInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostCreateOrConnectWithoutLinksInput", {})
export class PostCreateOrConnectWithoutLinksInput {
  @TypeGraphQL.Field((_type) => PostWhereUniqueInput, {
    nullable: false,
  })
  where!: PostWhereUniqueInput;

  @TypeGraphQL.Field((_type) => PostCreateWithoutLinksInput, {
    nullable: false,
  })
  create!: PostCreateWithoutLinksInput;
}
