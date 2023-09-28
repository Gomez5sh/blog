import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutQuotesInput } from "../inputs/PostCreateOrConnectWithoutQuotesInput";
import { PostCreateWithoutQuotesInput } from "../inputs/PostCreateWithoutQuotesInput";
import { PostUpdateToOneWithWhereWithoutQuotesInput } from "../inputs/PostUpdateToOneWithWhereWithoutQuotesInput";
import { PostUpsertWithoutQuotesInput } from "../inputs/PostUpsertWithoutQuotesInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostUpdateOneRequiredWithoutQuotesNestedInput", {})
export class PostUpdateOneRequiredWithoutQuotesNestedInput {
  @TypeGraphQL.Field((_type) => PostCreateWithoutQuotesInput, {
    nullable: true,
  })
  create?: PostCreateWithoutQuotesInput | undefined;

  @TypeGraphQL.Field((_type) => PostCreateOrConnectWithoutQuotesInput, {
    nullable: true,
  })
  connectOrCreate?: PostCreateOrConnectWithoutQuotesInput | undefined;

  @TypeGraphQL.Field((_type) => PostUpsertWithoutQuotesInput, {
    nullable: true,
  })
  upsert?: PostUpsertWithoutQuotesInput | undefined;

  @TypeGraphQL.Field((_type) => PostWhereUniqueInput, {
    nullable: true,
  })
  connect?: PostWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => PostUpdateToOneWithWhereWithoutQuotesInput, {
    nullable: true,
  })
  update?: PostUpdateToOneWithWhereWithoutQuotesInput | undefined;
}
