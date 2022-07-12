import { Channel } from "../entity/Channel";
import { Query, Resolver, Mutation, Arg } from "type-graphql";

@Resolver()
export class ChannelResolver {
  @Mutation(() => Boolean)
  async createChannel(
    @Arg("name", () => String, { nullable: true }) name: string | undefined
  ) {
    try {
      await Channel.insert({ name });
      return true;
    } catch (error) {
      return false;
    }
  }

  @Query(() => [Channel])
  channel() {
    return Channel.find();
  }
}
