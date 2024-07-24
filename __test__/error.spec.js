import { error as err } from "../src/scripts/error"

describe('Error',()=>{
  test('Error 1',()=>{
    expect(()=>err()).toThrow('I am new Error');
  })
})