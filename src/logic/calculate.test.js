import calculate from './calculate';

test('Testing calculate functions', () => {
  expect(calculate({ next: '2', operation: '+', total: '9' }, 'AC')).toEqual({
    next: null,
    operation: null,
    total: null,
  });
  expect(calculate({ next: '6', operation: '+', total: '2' }, '+')).toEqual({
    next: null,
    operation: '+',
    total: '8',
  });
  expect(calculate({ next: '6', operation: 'x', total: '1' }, 'x')).toEqual({
    next: null,
    operation: 'x',
    total: '6',
  });
  expect(calculate({ next: '10', operation: '%', total: '5' }, '%')).toEqual({
    next: null,
    operation: '%',
    total: '5',
  });
});
