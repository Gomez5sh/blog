import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutQuotesInput } from "../inputs/PostCreateOrConnectWithoutQuotesInput";
import { PostCreateWithoutQuotesInput } from "../inputs/PostCreateWithoutQuotesInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostCreateNestedOneWithoutQuotesInput", {})
export class PostCreateNestedOneWithoutQuotesInput {
  @TypeGraphQL.Field((_type) => PostCreateWithoutQuotesInput, {
    nullable: true,
  })
  create?: PostCreateWithoutQuotesInput | undefined;

  @TypeGraphQL.Field((_type) => PostCreateOrConnectWithoutQuotesInput, {
    nullable: true,
  })
  connectOrCreate?: PostCreateOrConnectWithoutQuotesInput | undefined;

  @TypeGraphQL.Field((_type) => PostWhereUniqueInput, {
    nullable: true,
  })
  connect?: PostWhereUniqueInput | undefined;
}
