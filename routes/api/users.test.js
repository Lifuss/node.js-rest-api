const request = require("supertest");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const app = require("../../app");

const User = require("../../models/user");

const { DB_HOST } = process.env;

describe("test login", () => {
  let server = null;
  beforeAll(async () => {
    server = app.listen(3002);
    await mongoose.connect(DB_HOST);
  });

  afterAll(async () => {
    server.close();
    await mongoose.connection.close();
  });

  afterEach(async () => {
    // я розумію що видаляю всіх юзерів
    await User.deleteMany({});
  });

  test("should login", async () => {
    const password = await bcrypt.hash("123qwe", 10);
    const newUser = {
      name: "Arsen",
      email: "example@gmail.com",
      password: password,
    };
    const createdUser = await User.create(newUser);

    const loginUser = {
      email: "example@gmail.com",
      password: "123qwe",
    };

    const res = await request(app).post("/api/users/login").send(loginUser);
    expect(res.statusCode).toBe(200);
    // token
    expect(res.body.token).toBeTruthy();
    // email
    expect(res.body.user).toHaveProperty("email");
    expect(typeof res.body.user.email).toBe("string");
    // subsctiption
    expect(res.body.user).toHaveProperty("subscription");
    expect(typeof res.body.user.subscription).toBe("string");

    //   порівнюю дані з бд
    const { token, email, subscription } = await User.findById(createdUser._id);
    expect(res.body.token).toBe(token);
    expect(res.body.user.email).toBe(email);
    expect(res.body.user.subscription).toBe(subscription);
  });
});
