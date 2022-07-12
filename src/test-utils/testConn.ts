import { createConnection } from "typeorm";
export const testConn = (drop: boolean = false) => {
  return createConnection({
    name: "test",
    type: "sqlite",
    database: ":memory:",
    synchronize: drop,
    dropSchema: drop,
    entities: ["../entity/**/*.ts"],
    migrations: ["../migration/**/*.ts"],
  });
};
