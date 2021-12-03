import operate from "../logic/operator";

const num1 = 5;
const num2 = 10;

describe('Test operate function', () => {
  test('Shoud return 15', () => {
    expect(operate(num1, num2, '+')).toStrictEqual('15');
  });
  test('Should return -5', () => {
    expect(operate(num1, num2, '-')).toStrictEqual('-5');
  });
  test('Should return 50', () => {
    expect(operate(num1, num2, 'x')).toStrictEqual('50');
  });
  test('Should return 0.5', () => {
    expect(operate(num1, num2, '÷')).toStrictEqual('0.5');
  });
  test('Should return 5', () => {
    expect(operate(num1, num2, '%')).toStrictEqual('5');
  });
  test('Should return 0', () => {
    expect(operate(num2, num1, '%')).toStrictEqual('0');
  });
});
