import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { QuoteCountAggregate } from "../outputs/QuoteCountAggregate";
import { QuoteMaxAggregate } from "../outputs/QuoteMaxAggregate";
import { QuoteMinAggregate } from "../outputs/QuoteMinAggregate";

@TypeGraphQL.ObjectType("QuoteGroupBy", {})
export class QuoteGroupBy {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  createdAt!: Date;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  updatedAt!: Date;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  content!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  author!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  postId!: string;

  @TypeGraphQL.Field((_type) => QuoteCountAggregate, {
    nullable: true,
  })
  _count!: QuoteCountAggregate | null;

  @TypeGraphQL.Field((_type) => QuoteMinAggregate, {
    nullable: true,
  })
  _min!: QuoteMinAggregate | null;

  @TypeGraphQL.Field((_type) => QuoteMaxAggregate, {
    nullable: true,
  })
  _max!: QuoteMaxAggregate | null;
}
