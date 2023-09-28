import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AnswerOrderByRelationAggregateInput } from "../inputs/AnswerOrderByRelationAggregateInput";
import { CommentOrderByRelationAggregateInput } from "../inputs/CommentOrderByRelationAggregateInput";
import { LikeOrderByRelationAggregateInput } from "../inputs/LikeOrderByRelationAggregateInput";
import { PostOrderByRelationAggregateInput } from "../inputs/PostOrderByRelationAggregateInput";
import { ProfileOrderByWithRelationInput } from "../inputs/ProfileOrderByWithRelationInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UserOrderByWithRelationInput", {})
export class UserOrderByWithRelationInput {
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
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrderInput, {
    nullable: true,
  })
  name?: SortOrderInput | undefined;

  @TypeGraphQL.Field((_type) => PostOrderByRelationAggregateInput, {
    nullable: true,
  })
  posts?: PostOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => ProfileOrderByWithRelationInput, {
    nullable: true,
  })
  profile?: ProfileOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field((_type) => CommentOrderByRelationAggregateInput, {
    nullable: true,
  })
  comments?: CommentOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => LikeOrderByRelationAggregateInput, {
    nullable: true,
  })
  likes?: LikeOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => AnswerOrderByRelationAggregateInput, {
    nullable: true,
  })
  answers?: AnswerOrderByRelationAggregateInput | undefined;
}
