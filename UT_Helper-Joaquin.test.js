
import { add, subtract } from './UT_Helper-JoaquinCT';

// Unit tests for the add function
describe('add function', () => {
  it('adds two positive numbers correctly', () => {
    expect(add(3, 4)).toBe(7);
  });

  it('adds a positive and a negative number correctly', () => {
    expect(add(3, -4)).toBe(-1);
  });

  it('adds two negative numbers correctly', () => {
    expect(add(-3, -4)).toBe(-7);
  });
});

// Unit tests for the subtract function
describe('subtract function', () => {
  it('subtracts two positive numbers correctly', () => {
    expect(subtract(8, 4)).toBe(4);
  });

  it('subtracts a positive number from a negative number correctly', () => {
    expect(subtract(-3, 4)).toBe(-7);
  });

  it('subtracts two negative numbers correctly', () => {
    expect(subtract(-3, -4)).toBe(1);
  });
});