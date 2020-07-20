import User from "../models/User";

test("it should be ok", () => {
  const user = User;
  user.name = "Gabriel";

  expect(user.name).toEqual("Gabriel");
});
