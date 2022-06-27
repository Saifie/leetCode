function CountPrimeNumber(n) {
  let count = 0;
  let primeArr = Array(n).fill(true);
  primeArr[0] = false;
  primeArr[1] = false;
  for (let i = 2; i < Math.ceil(Math.sqrt(n)); i++) {
    if (primeArr[i]) {
      for (let j = i * i; j < n; j = j + i) {
        primeArr[j] = false;
      }
    }
  }
  for (let i = 0; i < primeArr.length; i++) {
    if (primeArr[i]) {
      count++;
    }
  }
  return count;
}
console.log(CountPrimeNumber(12));
