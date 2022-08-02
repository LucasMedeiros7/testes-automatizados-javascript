import sum from './calculator.js';

it('should sum 2 and 2 and the result must be 4', () => {
  expect(sum(2, 2)).toBe(4);
});

it('should sum 2 and 2 even if one of them is a string and the result must be 4', () => {
  expect(sum('2', '2')).toBe(4);
});

it('should throw an error if what is provided to the method cannot be summed', () => {
  expect(() => {
    sum('', 2);
  }).toThrowError();

  expect(() => {
    sum({});
  }).toThrowError();

  expect(() => {
    sum([2, 2]);
  }).toThrowError();
});

it('should sum 2.5 and 5 even if one of them is a float and the result should be 7.5', () => {
  expect(sum(2.5, 5)).toBe(7.5);
});
