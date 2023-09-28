import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CodeCountAggregate } from "../outputs/CodeCountAggregate";
import { CodeMaxAggregate } from "../outputs/CodeMaxAggregate";
import { CodeMinAggregate } from "../outputs/CodeMinAggregate";

@TypeGraphQL.ObjectType("CodeGroupBy", {})
export class CodeGroupBy {
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
  language!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  postId!: string;

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
