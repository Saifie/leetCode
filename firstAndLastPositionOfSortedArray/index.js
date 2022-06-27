function first_position_of_sorted_array(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      if (mid === 0 || nums[mid - 1] !== target) {
        return mid;
      }
      right = right - 1;
    } else if (nums[mid] > target) {
      right = right - 1;
    } else {
      left = left + 1;
    }
  }
  return -1;
}
function last_position_of_sorted_array(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      if (mid === nums.length - 1 || nums[mid + 1] !== target) {
        return mid;
      }
      left = left + 1;
    } else if (nums[mid] > target) {
      right = right - 1;
    } else {
      left = left + 1;
    }
  }
  return -1;
}

function first_and_last_position_of_sorted_array(nums, target) {
  let first = first_position_of_sorted_array(nums, target);
  let last = last_position_of_sorted_array(nums, target);

  return [first, last];
}
console.log(first_and_last_position_of_sorted_array([3, 3, 3], 3));
