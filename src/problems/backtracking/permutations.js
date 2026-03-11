function permute(nums) {
  const answer = [];
  const used = new Array(nums.length).fill(false);

  function dfs(path) {
    if (path.length === nums.length) {
      answer.push([...path]);
      return;
    }

    for (let i = 0; i < nums.length; i += 1) {
      if (used[i]) {
        continue;
      }
      used[i] = true;
      path.push(nums[i]);
      dfs(path);
      path.pop();
      used[i] = false;
    }
  }

  dfs([]);
  return answer;
}

module.exports = { permute };
