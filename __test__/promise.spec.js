import { fakePromise } from "../src/scripts/promise";

describe("Promise Data", () => {
  test("Promise Success", () => {
    fakePromise(1)
      .then((response) => {
        expect(response).toBe("Success");
      })
      .catch((err) => {
        expect(err).not.toBeNull();
      });
  });
  test("Promise Error", () => {
    fakePromise('S')
      .then((response) => {
        expect(response).toBe("Success");
      })
      .catch((err) => {
        expect(err).not.toBeNull();
      });
  });
});
describe("Promise", () => {
  test("Promise Success", () => {
    expect(fakePromise(1)).resolves.toBe('Success')
  });
  test("Promise Error", () => {
    expect(fakePromise('a')).rejects.toBe('Not a number')
    
  });
});
