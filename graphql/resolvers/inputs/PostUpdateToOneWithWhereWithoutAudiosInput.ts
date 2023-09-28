import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostUpdateWithoutAudiosInput } from "../inputs/PostUpdateWithoutAudiosInput";
import { PostWhereInput } from "../inputs/PostWhereInput";

@TypeGraphQL.InputType("PostUpdateToOneWithWhereWithoutAudiosInput", {})
export class PostUpdateToOneWithWhereWithoutAudiosInput {
  @TypeGraphQL.Field((_type) => PostWhereInput, {
    nullable: true,
  })
  where?: PostWhereInput | undefined;

  @TypeGraphQL.Field((_type) => PostUpdateWithoutAudiosInput, {
    nullable: false,
  })
  data!: PostUpdateWithoutAudiosInput;
}
