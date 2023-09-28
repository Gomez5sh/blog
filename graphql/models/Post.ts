import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Audio } from "../models/Audio";
import { Category } from "../models/Category";
import { Code } from "../models/Code";
import { Comment } from "../models/Comment";
import { File } from "../models/File";
import { Image } from "../models/Image";
import { Like } from "../models/Like";
import { Link } from "../models/Link";
import { Poll } from "../models/Poll";
import { Question } from "../models/Question";
import { Quote } from "../models/Quote";
import { Tag } from "../models/Tag";
import { User } from "../models/User";
import { Video } from "../models/Video";
import { PostCount } from "../resolvers/outputs/PostCount";

@TypeGraphQL.ObjectType("Post", {})
export class Post {
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
  title!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  content?: string | null;

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: false,
  })
  published!: boolean;

  author?: User | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  authorId?: string | null;

  tags?: Tag[];

  images?: Image[];

  categories?: Category[];

  videos?: Video[];

  audios?: Audio[];

  files?: File[];

  links?: Link[];

  polls?: Poll[];

  questions?: Question[];

  quotes?: Quote[];

  codes?: Code[];

  comments?: Comment[];

  likes?: Like[];

  @TypeGraphQL.Field((_type) => PostCount, {
    nullable: true,
  })
  _count?: PostCount | null;
}
