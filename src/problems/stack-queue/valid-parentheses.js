function isValid(s) {
  const pairs = {
    ')': '(',
    ']': '[',
    '}': '{',
  };
  const stack = [];

  for (const ch of s) {
    if (ch === '(' || ch === '[' || ch === '{') {
      stack.push(ch);
    } else {
      const top = stack.pop();
      if (top !== pairs[ch]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

module.exports = { isValid };
