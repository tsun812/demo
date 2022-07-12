import { Connection } from "typeorm";
import { testConn } from "../test-utils/testConn";
import { gCall } from "../test-utils/gCall";

let conn: Connection;
beforeAll(async () => {
  conn = await testConn();
});
afterAll(async () => {
  await conn.close();
});

const registerMutation = `
mutation Register($data: RegisterInput!) {
  channel(name: "testChannel")
}
`;

describe("Register", () => {
  it("create user", async () => {
    console.log(
      await gCall({
        source: registerMutation,
        variableValues: {
          data: {
            name: "testChannel",
          },
        },
      })
    );
  });
});
