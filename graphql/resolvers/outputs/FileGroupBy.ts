import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FileCountAggregate } from "../outputs/FileCountAggregate";
import { FileMaxAggregate } from "../outputs/FileMaxAggregate";
import { FileMinAggregate } from "../outputs/FileMinAggregate";

@TypeGraphQL.ObjectType("FileGroupBy", {})
export class FileGroupBy {
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

  @TypeGraphQL.Field((_type) => FileCountAggregate, {
    nullable: true,
  })
  _count!: FileCountAggregate | null;

  @TypeGraphQL.Field((_type) => FileMinAggregate, {
    nullable: true,
  })
  _min!: FileMinAggregate | null;

  @TypeGraphQL.Field((_type) => FileMaxAggregate, {
    nullable: true,
  })
  _max!: FileMaxAggregate | null;
}
