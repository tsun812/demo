# GraphQL api demo

## Tech stacks

- Node.js/Express
- Typescript
- Type GraphQL
- Apollo
- Type ORM
- SQLite

## Getting started

Install dependencies:

```sh
yarn install
```

Running Webpack Development Server:

```sh
yarn start
```

please head over to http://localhost:3000/graphql to execute your first query.

## Project directory

- ## entity folder: defines models(DB schema, associations)

  -- Channel.ts: Channel model{id: number, name: string}
  -- Message.ts: Message model{id: number, title: string, content: string, createdAt: Date, channelId: number}

- ## resolvers folder: defines resolvers for CRUD

  ## -- ChannelResolver.ts: mutaion and query for Channel

  -- createChannel(name: string | undefined), create a new channel record in Channel table, returns true if succesfuly created, false if not.

  -- channel(), fetch all channels

  ## -- MessageResolver.ts: mutation and query for Message##

  -- createMessage(title: string | undefined, content: string, channelId: number), create a new message belongs to a channel, returns true if succesfuly created, false if not.

-- message(), fetch all messages

-- message(channelId: number), fetch all message belongs to a channel

- ## test-utils folder: defines resolvers for CRUD
- ## util folder: defines resolvers for CRUD
- ## **tests** folder: jest unit/integration test for resolver
- ## index.ts: entry point to api server
