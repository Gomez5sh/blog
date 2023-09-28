import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateAudioArgs } from "./args/AggregateAudioArgs";
import { CreateManyAudioArgs } from "./args/CreateManyAudioArgs";
import { CreateOneAudioArgs } from "./args/CreateOneAudioArgs";
import { DeleteManyAudioArgs } from "./args/DeleteManyAudioArgs";
import { DeleteOneAudioArgs } from "./args/DeleteOneAudioArgs";
import { FindFirstAudioArgs } from "./args/FindFirstAudioArgs";
import { FindFirstAudioOrThrowArgs } from "./args/FindFirstAudioOrThrowArgs";
import { FindManyAudioArgs } from "./args/FindManyAudioArgs";
import { FindUniqueAudioArgs } from "./args/FindUniqueAudioArgs";
import { FindUniqueAudioOrThrowArgs } from "./args/FindUniqueAudioOrThrowArgs";
import { GroupByAudioArgs } from "./args/GroupByAudioArgs";
import { UpdateManyAudioArgs } from "./args/UpdateManyAudioArgs";
import { UpdateOneAudioArgs } from "./args/UpdateOneAudioArgs";
import { UpsertOneAudioArgs } from "./args/UpsertOneAudioArgs";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";
import { Audio } from "../../../models/Audio";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateAudio } from "../../outputs/AggregateAudio";
import { AudioGroupBy } from "../../outputs/AudioGroupBy";

@TypeGraphQL.Resolver((_of) => Audio)
export class AudioCrudResolver {
  @TypeGraphQL.Query((_returns) => AggregateAudio, {
    nullable: false,
  })
  async aggregateAudio(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateAudioArgs,
  ): Promise<AggregateAudio> {
    return getPrismaFromContext(ctx).audio.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyAudio(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyAudioArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).audio.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Audio, {
    nullable: false,
  })
  async createOneAudio(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateOneAudioArgs,
  ): Promise<Audio> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).audio.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyAudio(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyAudioArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).audio.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Audio, {
    nullable: true,
  })
  async deleteOneAudio(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteOneAudioArgs,
  ): Promise<Audio | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).audio.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => Audio, {
    nullable: true,
  })
  async findFirstAudio(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstAudioArgs,
  ): Promise<Audio | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).audio.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => Audio, {
    nullable: true,
  })
  async findFirstAudioOrThrow(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstAudioOrThrowArgs,
  ): Promise<Audio | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).audio.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => [Audio], {
    nullable: false,
  })
  async findManyAudio(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyAudioArgs,
  ): Promise<Audio[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).audio.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => Audio, {
    nullable: true,
  })
  async findUniqueAudio(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueAudioArgs,
  ): Promise<Audio | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).audio.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => Audio, {
    nullable: true,
  })
  async findUniqueAudioOrThrow(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueAudioOrThrowArgs,
  ): Promise<Audio | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).audio.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => [AudioGroupBy], {
    nullable: false,
  })
  async groupByAudio(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByAudioArgs,
  ): Promise<AudioGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } =
      transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).audio.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(
          ([_, v]) => v != null,
        ),
      ),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyAudio(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyAudioArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).audio.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Audio, {
    nullable: true,
  })
  async updateOneAudio(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateOneAudioArgs,
  ): Promise<Audio | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).audio.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Audio, {
    nullable: false,
  })
  async upsertOneAudio(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertOneAudioArgs,
  ): Promise<Audio> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).audio.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
