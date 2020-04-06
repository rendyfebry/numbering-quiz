class Numbering {
  Sum(x = 0, y = 0) {
    // Parse Int
    const intX = parseInt(x);
    const intY = parseInt(y);

    // Fail safe
    if (isNaN(intX) || isNaN(intY)) {
      return 0;
    }

    return intX + intY;
  }

  Multiply(x = 0, y = 0) {
    // Parse Int
    const intX = parseInt(x);
    const intY = parseInt(y);

    // Fail safe
    if (isNaN(intX) || isNaN(intY)) {
      return 0;
    }

    return intX * intY;
  }

  isPrime(num) {
    // Fail fast, 0 & 1 is not prime
    if (num < 2) return false;

    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        return false;
      }
    }

    return true;
  }

  GetPrimes(n = 0) {
    const primes = [];
    let num = 2; // start with 2

    // Parse Int
    const intN = parseInt(n);

    // Fail safe
    if (isNaN(intN)) {
      return [];
    }

    while (primes.length < intN) {
      if (this.isPrime(num)) {
        primes.push(num);
      }

      num++;
    }

    return primes;
  }

  fibonacci(number) {
    if (number < 1) return 0;
    if (number <= 2) return 1;

    return this.fibonacci(number - 1) + this.fibonacci(number - 2);
  }

  GetFibonaccy(n = 0) {
    const fibs = [];

    // Parse Int
    const intN = parseInt(n);

    // Fail safe
    if (isNaN(intN)) {
      return [];
    }

    for (let i = 0; i < intN; i++) {
      fibs.push(this.fibonacci(i));
    }

    return fibs;
  }
}

module.exports = Numbering;
