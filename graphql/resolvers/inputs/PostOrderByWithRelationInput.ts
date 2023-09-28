import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AudioOrderByRelationAggregateInput } from "../inputs/AudioOrderByRelationAggregateInput";
import { CategoryOrderByRelationAggregateInput } from "../inputs/CategoryOrderByRelationAggregateInput";
import { CodeOrderByRelationAggregateInput } from "../inputs/CodeOrderByRelationAggregateInput";
import { CommentOrderByRelationAggregateInput } from "../inputs/CommentOrderByRelationAggregateInput";
import { FileOrderByRelationAggregateInput } from "../inputs/FileOrderByRelationAggregateInput";
import { ImageOrderByRelationAggregateInput } from "../inputs/ImageOrderByRelationAggregateInput";
import { LikeOrderByRelationAggregateInput } from "../inputs/LikeOrderByRelationAggregateInput";
import { LinkOrderByRelationAggregateInput } from "../inputs/LinkOrderByRelationAggregateInput";
import { PollOrderByRelationAggregateInput } from "../inputs/PollOrderByRelationAggregateInput";
import { QuestionOrderByRelationAggregateInput } from "../inputs/QuestionOrderByRelationAggregateInput";
import { QuoteOrderByRelationAggregateInput } from "../inputs/QuoteOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { TagOrderByRelationAggregateInput } from "../inputs/TagOrderByRelationAggregateInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
import { VideoOrderByRelationAggregateInput } from "../inputs/VideoOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PostOrderByWithRelationInput", {})
export class PostOrderByWithRelationInput {
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
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrderInput, {
    nullable: true,
  })
  content?: SortOrderInput | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  published?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrderInput, {
    nullable: true,
  })
  authorId?: SortOrderInput | undefined;

  @TypeGraphQL.Field((_type) => UserOrderByWithRelationInput, {
    nullable: true,
  })
  author?: UserOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field((_type) => TagOrderByRelationAggregateInput, {
    nullable: true,
  })
  tags?: TagOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => ImageOrderByRelationAggregateInput, {
    nullable: true,
  })
  images?: ImageOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => CategoryOrderByRelationAggregateInput, {
    nullable: true,
  })
  categories?: CategoryOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => VideoOrderByRelationAggregateInput, {
    nullable: true,
  })
  videos?: VideoOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => AudioOrderByRelationAggregateInput, {
    nullable: true,
  })
  audios?: AudioOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => FileOrderByRelationAggregateInput, {
    nullable: true,
  })
  files?: FileOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => LinkOrderByRelationAggregateInput, {
    nullable: true,
  })
  links?: LinkOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => PollOrderByRelationAggregateInput, {
    nullable: true,
  })
  polls?: PollOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => QuestionOrderByRelationAggregateInput, {
    nullable: true,
  })
  questions?: QuestionOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => QuoteOrderByRelationAggregateInput, {
    nullable: true,
  })
  quotes?: QuoteOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => CodeOrderByRelationAggregateInput, {
    nullable: true,
  })
  codes?: CodeOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => CommentOrderByRelationAggregateInput, {
    nullable: true,
  })
  comments?: CommentOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => LikeOrderByRelationAggregateInput, {
    nullable: true,
  })
  likes?: LikeOrderByRelationAggregateInput | undefined;
}
