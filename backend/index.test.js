import mongoose from "mongoose";
import request from "supertest";
import app from "./index.js";


describe("Test /api path", () => {
  let server;

  // Start the server before each test
  beforeEach(async () => {
    server = app.listen();
    await mongoose.connect(process.env.MONGOURL);
  });

  // Close the server after each test
  afterEach(async () => {
    server.close();
    await mongoose.connection.close();
  });

  test("It should respond with a 200 status code", async () => {
    const response = await request(server).get("/");
    expect(response.statusCode).toBe(200);
  });

  test("It should respond with a welcome message", async () => {
    const response = await request(server).get("/");
    expect(response.text).toBe("Welcome to the Wedding Planner");
  });

  test("It should get all the vendors", async () => {
    const response = await request(server).get("/api/vendors");
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body.vendors)).toBeTruthy();
  }, 10000);

  test("It should get a specific vendor Elegant Events Venue", async () => {
    const response = await request(server).get(
      "/api/vendors/65def0c76fc23261e656c75f"
    );
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeTruthy();

    // Check for specific properties on the vendor object
    expect(response.body._id).toBeDefined();
    expect(typeof response.body._id).toBe("string");
    expect(response.body.name).toBeDefined();
    expect(typeof response.body.name).toBe("string");
    expect(response.body.description).toBeDefined();
    expect(typeof response.body.description).toBe("string");
  }, 10000);

  test("It check the vendor in the database",async () => {
    const response = await request(server).get("/api/checkVendor/Je8nENNDldcb4gP4Thgo6tC0b5A2");
    expect(response.statusCode).toBe(200);
    
    expect(response.body.exists).toBe(true);
    expect(response.body._id).toBe("65def0f46fc23261e656db14");
  })

  test("It should create a new user", async () => {
    const response = await request(server)
      .post("/api/createuser")
      .send({
        groom_name: "John Doe1",
        bride_name: "Jane Doe1",
        email: "john.doe@example12345.com",
        firebaseUserId: "qwerty1234567",
        role: "user",
        todolist: ["item1", "item2", "item3"],
      });

    // Check that the status code is 201 (Created)
    expect(response.statusCode).toBe(201);

    // Check that the user's properties are correct
    expect(response.body.groom_name).toBe("John Doe1");
    expect(response.body.bride_name).toBe("Jane Doe1");
    expect(response.body.email).toBe("john.doe@example12345.com");
    expect(response.body.firebaseUserId).toBe("qwerty1234567");
    expect(response.body.role).toBe("user");
    expect(response.body.todolist).toEqual(["item1", "item2", "item3"]);
  }, 100000);

  test("It should get one user which Jhon Doe1", async () => {
    const response = await request(server).get("/api/getuser/dHGsmuUl0hPC6NnNsXlImAwctdq1");
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeTruthy();
    expect(response.body.groom_name).toBe("IIT");
    expect(response.body.bride_name).toBe("UOW");
    expect(response.body.email).toBe("jayathu.20211365@iit.ac.lk");
  })

  test("It check the user in the database", async () => {
    const response = await request(server).get("/api/checkUser/dHGsmuUl0hPC6NnNsXlImAwctdq1");
    expect(response.statusCode).toBe(200);
    
    expect(response.body.exists).toBe(true);
  })

  test("It should get all the todolist", async () => {
    const response = await request(server).get("/api/todo/tCsncGbhtoVW9SQvkIcRajZ5lop2");
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body.todolist)).toBeTruthy();
  },100000)

  test("It should delete one todo", async () => {
    const response = await request(server).delete("/api/todo/tCsncGbhtoVW9SQvkIcRajZ5lop2/1");
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("Todo deleted successfully");
  }, 10000);


  test("It should update one todo", async () => {
    const response = await request(server).put("/api/todo/tCsncGbhtoVW9SQvkIcRajZ5lop2/1");
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("Todo updated successfully");
  })

  test("It should add one todo", async () => {
    const response = await request(server).post("/api/todo/qwerty1234567").send({ "newTodo": "item4" });
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("Todo added successfully");
    expect(response.body.todolist).toEqual(["item1", "item2", "item3", "item4"]);
  })

  test("It should get vendor services", async () => {
    const response = await request(server).get("/api/vendors/65def0f46fc23261e656db14/services");
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body.services)).toBeTruthy();
  })

  test("It should display past weddings", async () => {
    const response = await request(server).get("/api/getPastWedding/49");
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeTruthy();
  })
});
