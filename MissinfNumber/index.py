def MissingNumber(nums):
    sum = 0;
    for i in nums:
        sum += i
#   gauss formula for finding sum
#   s=n*(n+1)/2
    total = (len(nums) * (len(nums) + 1)) / 2;
    return total - sum;

print(MissingNumber([0, 1, 3]));
