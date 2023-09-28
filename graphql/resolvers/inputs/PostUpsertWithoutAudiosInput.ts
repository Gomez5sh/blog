import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutAudiosInput } from "../inputs/PostCreateWithoutAudiosInput";
import { PostUpdateWithoutAudiosInput } from "../inputs/PostUpdateWithoutAudiosInput";
import { PostWhereInput } from "../inputs/PostWhereInput";

@TypeGraphQL.InputType("PostUpsertWithoutAudiosInput", {})
export class PostUpsertWithoutAudiosInput {
  @TypeGraphQL.Field((_type) => PostUpdateWithoutAudiosInput, {
    nullable: false,
  })
  update!: PostUpdateWithoutAudiosInput;

  @TypeGraphQL.Field((_type) => PostCreateWithoutAudiosInput, {
    nullable: false,
  })
  create!: PostCreateWithoutAudiosInput;

  @TypeGraphQL.Field((_type) => PostWhereInput, {
    nullable: true,
  })
  where?: PostWhereInput | undefined;
}
