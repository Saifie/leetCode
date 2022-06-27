function MissingNumber(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  //gauss formula for finding sum
  //s=n*(n+1)/2
  let total = (nums.length * (nums.length + 1)) / 2;
  return total - sum;
}
console.log(MissingNumber([0, 1, 3]));
