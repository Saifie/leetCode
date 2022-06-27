function moveZer0(nums) {
  let value = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[value] = nums[i];
      value++;
    }
  }
  for (let i = value; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
}

console.log(moveZer0([1, 2, 0, 3, 0, 0, 0, 5]));
