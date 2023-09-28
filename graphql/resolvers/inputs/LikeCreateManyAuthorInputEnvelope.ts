import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikeCreateManyAuthorInput } from "../inputs/LikeCreateManyAuthorInput";

@TypeGraphQL.InputType("LikeCreateManyAuthorInputEnvelope", {})
export class LikeCreateManyAuthorInputEnvelope {
  @TypeGraphQL.Field((_type) => [LikeCreateManyAuthorInput], {
    nullable: false,
  })
  data!: LikeCreateManyAuthorInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
