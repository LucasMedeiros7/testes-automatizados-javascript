import { queryString } from './queryString.js';

describe('Object to query string', () => {
  it('should create a valid query string when an object is provided', () => {
    const obj = {
      name: 'Lucas',
      age: 25,
      profession: 'software-engineer',
    };

    expect(queryString(obj)).toBe(
      'name=Lucas&age=25&profession=software-engineer'
    );
  });
});

// describe('Query string to object', () => { });
