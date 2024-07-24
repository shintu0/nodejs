import { result } from "../src/scripts/array";

describe("Array", () => {
  test("Array Contains", () => {
    expect(result()).toContain(1);
  });
  
});