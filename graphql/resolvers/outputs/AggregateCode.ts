import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CodeCountAggregate } from "../outputs/CodeCountAggregate";
import { CodeMaxAggregate } from "../outputs/CodeMaxAggregate";
import { CodeMinAggregate } from "../outputs/CodeMinAggregate";

@TypeGraphQL.ObjectType("AggregateCode", {})
export class AggregateCode {
  @TypeGraphQL.Field((_type) => CodeCountAggregate, {
    nullable: true,
  })
  _count!: CodeCountAggregate | null;

  @TypeGraphQL.Field((_type) => CodeMinAggregate, {
    nullable: true,
  })
  _min!: CodeMinAggregate | null;

  @TypeGraphQL.Field((_type) => CodeMaxAggregate, {
    nullable: true,
  })
  _max!: CodeMaxAggregate | null;
}
