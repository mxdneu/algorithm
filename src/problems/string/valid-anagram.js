function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const count = new Map();
  for (const ch of s) {
    count.set(ch, (count.get(ch) || 0) + 1);
  }

  for (const ch of t) {
    if (!count.has(ch)) {
      return false;
    }
    const next = count.get(ch) - 1;
    if (next === 0) {
      count.delete(ch);
    } else {
      count.set(ch, next);
    }
  }

  return count.size === 0;
}

module.exports = { isAnagram };
