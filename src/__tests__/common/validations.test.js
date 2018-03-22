import * as validate from '../../common/validations';

describe('Validation', () => {
  test('required() works properly', () => {
    expect(validate.required('john')).toBe(undefined);
    expect(validate.required()).toBe('Required');
  });

  test('email() works properly', () => {
    expect(validate.email('foo@bar.com')).toBe(undefined);
    expect(validate.email('fds')).toBe('Invalid email address');
  });

  test('maxLength4000 works as expected', () => {
    const char4000 = 'x'.repeat(4000);
    const char4001 = 'x'.repeat(4001);
    expect(validate.maxLength4000(char4000)).toBe(undefined);
    expect(validate.maxLength4000(char4001)).toBe('Must be 4000 characters or less');
  });

  test('maxLength500 works as expected', () => {
    const char500 = 'x'.repeat(500);
    const char501 = 'x'.repeat(501);
    expect(validate.maxLength500(char500)).toBe(undefined);
    expect(validate.maxLength500(char501)).toBe('Must be 500 characters or less');
  });

  test('number() works as expected', () => {
    const num = 4000;
    const str = 'hi';
    expect(validate.number(num)).toBe(undefined);
    expect(validate.number(str)).toBe('Must be a number');
  });

  test('maxValue4000() works as expected', () => {
    const val4001 = 4001;
    const val4000 = 4000;
    expect(validate.maxValue4000(val4000)).toBe(undefined);
    expect(validate.maxValue4000(val4001)).toBe('Must be no greater than 4000');
  });

  test()
})
