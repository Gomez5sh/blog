import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutPollsInput } from "../inputs/PostCreateOrConnectWithoutPollsInput";
import { PostCreateWithoutPollsInput } from "../inputs/PostCreateWithoutPollsInput";
import { PostUpdateToOneWithWhereWithoutPollsInput } from "../inputs/PostUpdateToOneWithWhereWithoutPollsInput";
import { PostUpsertWithoutPollsInput } from "../inputs/PostUpsertWithoutPollsInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostUpdateOneRequiredWithoutPollsNestedInput", {})
export class PostUpdateOneRequiredWithoutPollsNestedInput {
  @TypeGraphQL.Field((_type) => PostCreateWithoutPollsInput, {
    nullable: true,
  })
  create?: PostCreateWithoutPollsInput | undefined;

  @TypeGraphQL.Field((_type) => PostCreateOrConnectWithoutPollsInput, {
    nullable: true,
  })
  connectOrCreate?: PostCreateOrConnectWithoutPollsInput | undefined;

  @TypeGraphQL.Field((_type) => PostUpsertWithoutPollsInput, {
    nullable: true,
  })
  upsert?: PostUpsertWithoutPollsInput | undefined;

  @TypeGraphQL.Field((_type) => PostWhereUniqueInput, {
    nullable: true,
  })
  connect?: PostWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => PostUpdateToOneWithWhereWithoutPollsInput, {
    nullable: true,
  })
  update?: PostUpdateToOneWithWhereWithoutPollsInput | undefined;
}
