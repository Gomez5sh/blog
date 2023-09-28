import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { QuoteCountAggregate } from "../outputs/QuoteCountAggregate";
import { QuoteMaxAggregate } from "../outputs/QuoteMaxAggregate";
import { QuoteMinAggregate } from "../outputs/QuoteMinAggregate";

@TypeGraphQL.ObjectType("AggregateQuote", {})
export class AggregateQuote {
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
