import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Answer } from "../models/Answer";
import { Comment } from "../models/Comment";
import { Like } from "../models/Like";
import { Post } from "../models/Post";
import { Profile } from "../models/Profile";
import { UserCount } from "../resolvers/outputs/UserCount";

@TypeGraphQL.ObjectType("User", {})
export class User {
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
  email!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  name?: string | null;

  posts?: Post[];

  profile?: Profile | null;

  comments?: Comment[];

  likes?: Like[];

  answers?: Answer[];

  @TypeGraphQL.Field((_type) => UserCount, {
    nullable: true,
  })
  _count?: UserCount | null;
}
