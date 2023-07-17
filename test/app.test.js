const request = require("supertest");
const app = require("../app");

describe("Test the hello-world path", () => {
	test("It should respond 'Hello World!'", () => {
		return request(app)
			.get("/hello-world")
			.then(resp => {
				expect(resp.statusCode).toBe(200);
				expect(resp.text).toBe("Hello World!");
			});
		});
});

describe("Test the 404 page", () => {
	test("It should respond with the 404 error code", () => {
		return request(app)
			.get("/page-that-does-not-exist")
			.then(resp => {
				expect(resp.statusCode).toBe(404);
			});
		});
});