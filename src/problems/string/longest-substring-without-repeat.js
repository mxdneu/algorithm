function lengthOfLongestSubstring(s) {
  const lastSeen = new Map();
  let left = 0;
  let ans = 0;

  for (let right = 0; right < s.length; right += 1) {
    const ch = s[right];
    if (lastSeen.has(ch) && lastSeen.get(ch) >= left) {
      left = lastSeen.get(ch) + 1;
    }
    lastSeen.set(ch, right);
    ans = Math.max(ans, right - left + 1);
  }

  return ans;
}

module.exports = { lengthOfLongestSubstring };
