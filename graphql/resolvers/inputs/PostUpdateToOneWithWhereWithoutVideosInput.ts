import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostUpdateWithoutVideosInput } from "../inputs/PostUpdateWithoutVideosInput";
import { PostWhereInput } from "../inputs/PostWhereInput";

@TypeGraphQL.InputType("PostUpdateToOneWithWhereWithoutVideosInput", {})
export class PostUpdateToOneWithWhereWithoutVideosInput {
  @TypeGraphQL.Field((_type) => PostWhereInput, {
    nullable: true,
  })
  where?: PostWhereInput | undefined;

  @TypeGraphQL.Field((_type) => PostUpdateWithoutVideosInput, {
    nullable: false,
  })
  data!: PostUpdateWithoutVideosInput;
}
