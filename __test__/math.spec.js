import { add, multiply, subtract } from "../src/scripts/maths.js"

describe('Addition', () => { 

  //string test
  test('String to Match',()=>{
    expect(add('Hello','World')).toMatch(/.+/)
  })
  test('Add ToBe',()=>{
    expect(add(1,2)).toBe(3)
  })
  test('Add ToEqual',()=>{
    expect(add(3,3)).toEqual(6);
  })
  test('Add NullCheck',()=>{
    expect(add(3,3)).not.toBeNull();
  })
  test('Add Greater than',()=>{
    expect(add(4,5)).not.toBeGreaterThan(9);
  })
 })
describe('Subtraction', () => { 
  test('Subtract ToBe',()=>{
    expect(subtract(1,2)).toBe(-1)
  })
  test('Subtract ToEqual',()=>{
    expect(subtract(3,3)).toEqual(0);
  })
  test('Subtract NullCheck',()=>{
    expect(subtract(3,3)).not.toBeNull();
  })
  test('Subtract Greater than',()=>{
    expect(subtract(4,5)).not.toBeGreaterThan(0);
  })
 })
describe('Multiplication', () => { 
  test('Multiply ToBe',()=>{
    expect(multiply(1,2)).toBe(2);
  })
  test('Multiply ToEqual',()=>{
    expect(multiply(3,3)).toEqual(9);
  })
  test('Multiply NullCheck',()=>{
    expect(multiply(3,3)).not.toBeNull();
  })
  test('Multiply Greater than',()=>{
    expect(multiply(4,5)).not.toBeGreaterThan(20);
  })
 })