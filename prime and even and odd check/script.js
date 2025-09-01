function isPrime(n) {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

function checkNumber() {
  const input = document.getElementById('numberInput').value;
  const result = document.getElementById('result');

  if (input === '') {
    result.textContent = 'Please enter a number.';
    return;
  }

  const number = parseInt(input);

  if (isNaN(number)) {
    result.textContent = 'Invalid input.';
    return;
  }

  const isEven = number % 2 === 0;
  const evenOdd = isEven ? 'Even' : 'Odd';
  const primeCheck = isPrime(number) ? 'a Prime' : 'not a Prime';

  result.textContent = `${number} is ${evenOdd} and ${primeCheck} number.`;
}
