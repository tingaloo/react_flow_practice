export const required = value => (value ? undefined : 'Required');
export const email = value =>
  (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
    'Invalid email address' : undefined);
export const maxLength = max => value =>
  (value && value.length > max ? `Must be ${max} characters or less` : undefined);
export const maxLength4000 = maxLength(4000);
export const maxLength500 = maxLength(500);
export const number = value => (value && isNaN(Number(value)) ? 'Must be a number' : undefined);
export const maxValue = max => value =>
  (value && value > max ? `Must be no greater than ${max}` : undefined);
export const maxValue4000 = maxValue(4000);
export const date = value =>
  (value ?
    'Invalid date' : undefined);
