def validMountain(A):
    i = 1
    while (i < len(A) and A[i] > A[i - 1]):
        i=i + 1
    if (i == 1 or i == len(A)):
        return False

    while (i < len(A) and A[i-1] > A[i]):
        i=i + 1
  
    return i == len(A)

