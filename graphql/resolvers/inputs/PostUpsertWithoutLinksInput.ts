import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutLinksInput } from "../inputs/PostCreateWithoutLinksInput";
import { PostUpdateWithoutLinksInput } from "../inputs/PostUpdateWithoutLinksInput";
import { PostWhereInput } from "../inputs/PostWhereInput";

@TypeGraphQL.InputType("PostUpsertWithoutLinksInput", {})
export class PostUpsertWithoutLinksInput {
  @TypeGraphQL.Field((_type) => PostUpdateWithoutLinksInput, {
    nullable: false,
  })
  update!: PostUpdateWithoutLinksInput;

  @TypeGraphQL.Field((_type) => PostCreateWithoutLinksInput, {
    nullable: false,
  })
  create!: PostCreateWithoutLinksInput;

  @TypeGraphQL.Field((_type) => PostWhereInput, {
    nullable: true,
  })
  where?: PostWhereInput | undefined;
}
