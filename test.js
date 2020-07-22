function FindContinuousSequence(sum)
{
    // write code here
  let plow = 1;
  let phigh = 2;
  let result = [];
  while(plow < phigh) {
    let currunt = (plow + phigh) * (phigh - plow + 1)/2;
    if (currunt === sum) {
      let item = [];
      for(let i = plow;i <= phigh;i++) {
        item.push(i);
      }
      result.push(item);
      plow++;
    } else if (currunt < sum) {
      phigh++;
    } else {
      plow++;
    }
  }
  return result;
}
