function Sum(x = 0, y = 0) {
  // Parse Int
  const intX = parseInt(x);
  const intY = parseInt(y);

  // Fail safe
  if (isNaN(intX) || isNaN(intY)) {
    return 0;
  }

  return intX + intY;
}

function Multiply(x = 0, y = 0) {
  // Parse Int
  const intX = parseInt(x);
  const intY = parseInt(y);

  // Fail safe
  if (isNaN(intX) || isNaN(intY)) {
    return 0;
  }

  return intX * intY;
}

function isPrime(num) {
  // Fail fast, 0 & 1 is not prime
  if (num < 2) return false;

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function GetPrimes(n = 0) {
  const primes = [];
  let num = 2; // start with 2

  // Parse Int
  const intN = parseInt(n);

  // Fail safe
  if (isNaN(intN)) {
    return [];
  }

  while (primes.length < intN) {
    if (isPrime(num)) {
      primes.push(num);
    }

    num++;
  }

  return primes;
}

function fibonacci(number) {
  if (number < 1) return 0;
  if (number <= 2) return 1;

  return fibonacci(number - 1) + fibonacci(number - 2);
}

function GetFibonaccy(n = 0) {
  const fibs = [];

  // Parse Int
  const intN = parseInt(n);

  // Fail safe
  if (isNaN(intN)) {
    return [];
  }

  for (let i = 0; i < intN; i++) {
    fibs.push(fibonacci(i));
  }

  return fibs;
}

module.exports = {
  Sum,
  Multiply,
  GetPrimes,
  GetFibonaccy
};
