import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Audio } from "../../../models/Audio";
import { Category } from "../../../models/Category";
import { Code } from "../../../models/Code";
import { Comment } from "../../../models/Comment";
import { File } from "../../../models/File";
import { Image } from "../../../models/Image";
import { Like } from "../../../models/Like";
import { Link } from "../../../models/Link";
import { Poll } from "../../../models/Poll";
import { Post } from "../../../models/Post";
import { Question } from "../../../models/Question";
import { Quote } from "../../../models/Quote";
import { Tag } from "../../../models/Tag";
import { User } from "../../../models/User";
import { Video } from "../../../models/Video";
import { PostAudiosArgs } from "./args/PostAudiosArgs";
import { PostAuthorArgs } from "./args/PostAuthorArgs";
import { PostCategoriesArgs } from "./args/PostCategoriesArgs";
import { PostCodesArgs } from "./args/PostCodesArgs";
import { PostCommentsArgs } from "./args/PostCommentsArgs";
import { PostFilesArgs } from "./args/PostFilesArgs";
import { PostImagesArgs } from "./args/PostImagesArgs";
import { PostLikesArgs } from "./args/PostLikesArgs";
import { PostLinksArgs } from "./args/PostLinksArgs";
import { PostPollsArgs } from "./args/PostPollsArgs";
import { PostQuestionsArgs } from "./args/PostQuestionsArgs";
import { PostQuotesArgs } from "./args/PostQuotesArgs";
import { PostTagsArgs } from "./args/PostTagsArgs";
import { PostVideosArgs } from "./args/PostVideosArgs";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Post)
export class PostRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => User, {
    nullable: true,
  })
  async author(
    @TypeGraphQL.Root() post: Post,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: PostAuthorArgs,
  ): Promise<User | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .post.findUniqueOrThrow({
        where: {
          id: post.id,
        },
      })
      .author({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }

  @TypeGraphQL.FieldResolver((_type) => [Tag], {
    nullable: false,
  })
  async tags(
    @TypeGraphQL.Root() post: Post,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: PostTagsArgs,
  ): Promise<Tag[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .post.findUniqueOrThrow({
        where: {
          id: post.id,
        },
      })
      .tags({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }

  @TypeGraphQL.FieldResolver((_type) => [Image], {
    nullable: false,
  })
  async images(
    @TypeGraphQL.Root() post: Post,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: PostImagesArgs,
  ): Promise<Image[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .post.findUniqueOrThrow({
        where: {
          id: post.id,
        },
      })
      .images({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }

  @TypeGraphQL.FieldResolver((_type) => [Category], {
    nullable: false,
  })
  async categories(
    @TypeGraphQL.Root() post: Post,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: PostCategoriesArgs,
  ): Promise<Category[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .post.findUniqueOrThrow({
        where: {
          id: post.id,
        },
      })
      .categories({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }

  @TypeGraphQL.FieldResolver((_type) => [Video], {
    nullable: false,
  })
  async videos(
    @TypeGraphQL.Root() post: Post,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: PostVideosArgs,
  ): Promise<Video[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .post.findUniqueOrThrow({
        where: {
          id: post.id,
        },
      })
      .videos({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }

  @TypeGraphQL.FieldResolver((_type) => [Audio], {
    nullable: false,
  })
  async audios(
    @TypeGraphQL.Root() post: Post,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: PostAudiosArgs,
  ): Promise<Audio[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .post.findUniqueOrThrow({
        where: {
          id: post.id,
        },
      })
      .audios({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }

  @TypeGraphQL.FieldResolver((_type) => [File], {
    nullable: false,
  })
  async files(
    @TypeGraphQL.Root() post: Post,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: PostFilesArgs,
  ): Promise<File[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .post.findUniqueOrThrow({
        where: {
          id: post.id,
        },
      })
      .files({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }

  @TypeGraphQL.FieldResolver((_type) => [Link], {
    nullable: false,
  })
  async links(
    @TypeGraphQL.Root() post: Post,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: PostLinksArgs,
  ): Promise<Link[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .post.findUniqueOrThrow({
        where: {
          id: post.id,
        },
      })
      .links({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }

  @TypeGraphQL.FieldResolver((_type) => [Poll], {
    nullable: false,
  })
  async polls(
    @TypeGraphQL.Root() post: Post,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: PostPollsArgs,
  ): Promise<Poll[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .post.findUniqueOrThrow({
        where: {
          id: post.id,
        },
      })
      .polls({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }

  @TypeGraphQL.FieldResolver((_type) => [Question], {
    nullable: false,
  })
  async questions(
    @TypeGraphQL.Root() post: Post,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: PostQuestionsArgs,
  ): Promise<Question[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .post.findUniqueOrThrow({
        where: {
          id: post.id,
        },
      })
      .questions({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }

  @TypeGraphQL.FieldResolver((_type) => [Quote], {
    nullable: false,
  })
  async quotes(
    @TypeGraphQL.Root() post: Post,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: PostQuotesArgs,
  ): Promise<Quote[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .post.findUniqueOrThrow({
        where: {
          id: post.id,
        },
      })
      .quotes({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }

  @TypeGraphQL.FieldResolver((_type) => [Code], {
    nullable: false,
  })
  async codes(
    @TypeGraphQL.Root() post: Post,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: PostCodesArgs,
  ): Promise<Code[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .post.findUniqueOrThrow({
        where: {
          id: post.id,
        },
      })
      .codes({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }

  @TypeGraphQL.FieldResolver((_type) => [Comment], {
    nullable: false,
  })
  async comments(
    @TypeGraphQL.Root() post: Post,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: PostCommentsArgs,
  ): Promise<Comment[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .post.findUniqueOrThrow({
        where: {
          id: post.id,
        },
      })
      .comments({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }

  @TypeGraphQL.FieldResolver((_type) => [Like], {
    nullable: false,
  })
  async likes(
    @TypeGraphQL.Root() post: Post,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: PostLikesArgs,
  ): Promise<Like[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .post.findUniqueOrThrow({
        where: {
          id: post.id,
        },
      })
      .likes({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }
}
