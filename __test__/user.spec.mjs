import { add } from "./index.mjs"

describe('first', () => { 
  test('Add',()=>{
    expect(add(1,2)).toBe(3)
  })
 })