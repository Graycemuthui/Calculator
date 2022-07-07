import operate from './operate';

test('Testing operate  functions', () => {
  expect(operate('1', '2', '+')).toBe('3');
  expect(operate('3', '1', '-')).toBe('2');
  expect(operate('2', '2', 'x')).toBe('4');
});
