import { queryString, parse } from './queryString.js';

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

  it('should create a valid query string even when an array is passed as value', () => {
    const obj = {
      name: 'Lucas',
      abilities: ['JS', 'CSS', 'HTML'],
    };

    expect(queryString(obj)).toBe('name=Lucas&abilities=JS,CSS,HTML');
  });

  it('should throw an error when an object is passed as value', () => {
    const obj = {
      name: 'Lucas',
      abilities: {
        JS: true,
        CSS: true,
        HTML: true,
      },
    };

    expect(() => {
      queryString(obj);
    }).toThrowError();
  });
});

describe('Query string to object', () => {
  it('should convert a query string to object', () => {
    const queryString = 'name=Lucas&age=25&profession=software-engineer';

    expect(parse(queryString)).toEqual({
      name: 'Lucas',
      age: '25',
      profession: 'software-engineer',
    });
  });

  it('should convert a query string of a single key-value pair to object', () => {
    const queryString = 'name=Lucas';

    expect(parse(queryString)).toEqual({
      name: 'Lucas',
    });
  });

  it('should convert a query string to an object taking care of comma separated values', () => {
    const queryString = 'name=Lucas&abilities=JS,CSS,HTML';

    expect(parse(queryString)).toEqual({
      name: 'Lucas',
      abilities: ['JS', 'CSS', 'HTML'],
    });
  });
});
