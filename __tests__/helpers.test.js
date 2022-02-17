const { format_date } = require('../utils/helpers');
const { format_plural } = require('../utils/helpers');
const { format_url } = require('../utils/helpers');

test('format_date() returns a date string', () => {
  const date = new Date('2020-03-20 16:12:03');

  expect(format_date(date)).toBe('3/20/2020');
});

test('format_plural() returns pluralized words if more than 1 and singular if = 1', () => {
  const pluralWord = format_plural('Tiger', 2);
  const singleWord = format_plural('Lion', 1);

  expect(pluralWord).toBe('Tigers');
  expect(singleWord).toBe('Lion');
});
