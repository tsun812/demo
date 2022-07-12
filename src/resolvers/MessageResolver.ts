import { Message } from "../entity/Message";
import { Channel } from "../entity/Channel";
import { Query, Resolver, Mutation, Arg, Int } from "type-graphql";

@Resolver()
export class MessageResolver {
  @Mutation(() => Boolean)
  async createMessage(
    @Arg("title", () => String, { nullable: true }) title: string | undefined,
    @Arg("content", () => String) content: string,
    @Arg("channel", () => Int) channel: number
  ) {
    try {
      const channeltoFetch = await Channel.findOne({ id: channel });
      await Message.insert({
        title,
        content,
        channel: channeltoFetch,
        createdAt: new Date(),
      });
    } catch (error) {
      console.error(error);
      return false;
    }
    return true;
  }

  @Query(() => [Message])
  message() {
    let channelId = 1;
    return Message.find({ where: { channelId } });
  }
  @Query(() => [Message])
  messageByChannel(@Arg("channel", () => Int) channel: number) {
    return Message.find({ where: { channelId: channel } });
  }
}
