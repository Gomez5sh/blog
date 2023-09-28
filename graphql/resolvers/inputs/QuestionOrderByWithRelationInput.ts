import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AnswerOrderByRelationAggregateInput } from "../inputs/AnswerOrderByRelationAggregateInput";
import { PostOrderByWithRelationInput } from "../inputs/PostOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("QuestionOrderByWithRelationInput", {})
export class QuestionOrderByWithRelationInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  question?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  options?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  postId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => PostOrderByWithRelationInput, {
    nullable: true,
  })
  post?: PostOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field((_type) => AnswerOrderByRelationAggregateInput, {
    nullable: true,
  })
  Answer?: AnswerOrderByRelationAggregateInput | undefined;
}
