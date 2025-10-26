import request from "supertest";
import app from "../../app.js";

describe("Test the root path", () => {
  test("It should response the GET method", (done) => {
    request(app)
      .get("/")
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

describe("Test the about path", () => {
  test("It should response the GET method", async () => {
    const response = await request(app)
      .get("/api/about")
      .expect(200)
      .expect('Content-Type', /json/);

    const responseBody = await response.body;
    expect(responseBody).toMatchObject({
      status: "success",
      data: {
        nombre: "Sthefany Liendo",
        cedula: "V-31392078",
        seccion: 1,
      },
    });
  });
});

describe("Test the ping path", () => {
  test("It should response the GET method", (done) => {
    request(app)
      .get("/api/ping")
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});