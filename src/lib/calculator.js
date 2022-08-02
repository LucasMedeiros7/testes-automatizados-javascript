function sum(num1, num2) {
  const int1 = parseFloat(num1, 10);
  const int2 = parseFloat(num2, 10);

  if (Number.isNaN(int1) || Number.isNaN(int2)) {
    throw new Error('Please check your input');
  }

  return int1 + int2;
}

export default sum;
