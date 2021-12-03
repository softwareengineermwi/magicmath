import operate from "../logic/operator";

const fnum = 5;
const snum = 10;

describe('Test operate function', () => {
  test('add operation return String 15 as a result', () => {
    expect(operate(fnum, snum, '+')).toEqual('15');
  });
  test('subtract operation return String -5 as a result', () => {
    expect(operate(fnum, snum, '-')).toEqual('-5');
  });
  test('Multiply operation return String 50 as a result', () => {
    expect(operate(fnum, snum, 'x')).toEqual('50');
  });
  test('divide operation return String 0.5 as a result', () => {
    expect(operate(fnum, snum, '÷')).toEqual('0.5');
  });
  test('mod operation return String 5 as a result', () => {
    expect(operate(fnum, snum, '%')).toEqual('5');
  });
  test('mod operation return String 0 as a result', () => {
    expect(operate(snum, fnum, '%')).toEqual('0');
  });
});
