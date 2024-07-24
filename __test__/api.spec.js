import supertest from 'supertest';
import { app } from "../index.js";


describe("API", () => {
  test("API Success", async() => {
    const response =await supertest(app).get('/');
    console.log(response.text)
    expect(response).not.toBeNull();
  });
});