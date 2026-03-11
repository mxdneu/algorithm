function twoSum(nums, target) {
  const indexMap = new Map();
  for (let i = 0; i < nums.length; i += 1) {
    const need = target - nums[i];
    if (indexMap.has(need)) {
      return [indexMap.get(need), i];
    }
    indexMap.set(nums[i], i);
  }
  return [];
}

module.exports = { twoSum };
