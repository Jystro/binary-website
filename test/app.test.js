const request = require("supertest");
const app = require("../app");

describe("Test the hello-world path", () => {
	test("It should response 'Hello World!'", () => {
		return request(app)
			.get("/hello-world")
			.then(resp => {
				expect(resp.statusCode).toBe(200);
				expect(resp.text).toBe("Hello World!");
			});
		});
});