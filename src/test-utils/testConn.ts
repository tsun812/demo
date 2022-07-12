import { createConnection } from "typeorm";
export const testConn = (drop: boolean = false) => {
  return createConnection({
    name: "test",
    type: "sqlite",
    database: "database.sqlite",
    synchronize: drop,
    dropSchema: drop,
    entities: ["src/entity/**/*.ts"],
    migrations: ["src/migration/**/*.ts"],
    subscribers: ["src/subscriber/**/*.ts"],
    cli: {
      entitiesDir: "src/entity",
      migrationsDir: "src/migration",
      subscribersDir: "src/subscriber",
    },
  });
};
