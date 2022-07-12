import { buildSchema } from "type-graphql";
import { ChannelResolver } from "../resolvers/ChannelResolver";
import { MessageResolver } from "../resolvers/MessageResolver";

export const createSchema = () =>
  buildSchema({
    resolvers: [ChannelResolver, MessageResolver],
  });
