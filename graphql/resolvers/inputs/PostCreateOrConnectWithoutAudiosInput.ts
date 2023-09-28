import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutAudiosInput } from "../inputs/PostCreateWithoutAudiosInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostCreateOrConnectWithoutAudiosInput", {})
export class PostCreateOrConnectWithoutAudiosInput {
  @TypeGraphQL.Field((_type) => PostWhereUniqueInput, {
    nullable: false,
  })
  where!: PostWhereUniqueInput;

  @TypeGraphQL.Field((_type) => PostCreateWithoutAudiosInput, {
    nullable: false,
  })
  create!: PostCreateWithoutAudiosInput;
}
