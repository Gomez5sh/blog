import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinkCountAggregate } from "../outputs/LinkCountAggregate";
import { LinkMaxAggregate } from "../outputs/LinkMaxAggregate";
import { LinkMinAggregate } from "../outputs/LinkMinAggregate";

@TypeGraphQL.ObjectType("LinkGroupBy", {})
export class LinkGroupBy {
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
  url!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  postId!: string;

  @TypeGraphQL.Field((_type) => LinkCountAggregate, {
    nullable: true,
  })
  _count!: LinkCountAggregate | null;

  @TypeGraphQL.Field((_type) => LinkMinAggregate, {
    nullable: true,
  })
  _min!: LinkMinAggregate | null;

  @TypeGraphQL.Field((_type) => LinkMaxAggregate, {
    nullable: true,
  })
  _max!: LinkMaxAggregate | null;
}
