import math
def CountPrimeNumber(n):
    count = 0;
    primeArr = [True]*n
    primeArr[0] = False;
    primeArr[1] = False;
    for i in range(2, math.ceil(math.sqrt(n))):
        if (primeArr[i]):
            for j in range(i*i,n,i):
                primeArr[j] = False;
      
  
    return sum(primeArr);

print(CountPrimeNumber(12));
