import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostUpdateWithoutLinksInput } from "../inputs/PostUpdateWithoutLinksInput";
import { PostWhereInput } from "../inputs/PostWhereInput";

@TypeGraphQL.InputType("PostUpdateToOneWithWhereWithoutLinksInput", {})
export class PostUpdateToOneWithWhereWithoutLinksInput {
  @TypeGraphQL.Field((_type) => PostWhereInput, {
    nullable: true,
  })
  where?: PostWhereInput | undefined;

  @TypeGraphQL.Field((_type) => PostUpdateWithoutLinksInput, {
    nullable: false,
  })
  data!: PostUpdateWithoutLinksInput;
}
