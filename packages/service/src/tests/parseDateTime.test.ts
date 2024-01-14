// sum.test.js
import { expect, test } from 'vitest';
import { parseDateTime } from '../utils/parseDateTime';

test('parseDateTime', () => {
  const input = '2023-11-25T14:19:59.702732';
  const output = '2023. 11. 25. 14:19:59';
  expect(parseDateTime(input)).toBe(output);
});
