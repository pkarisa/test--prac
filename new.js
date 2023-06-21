function longestConsecutiveSubsequenceLength(N) {
    const numSet = new Set(N);
    let maxLength = 0;
  
    for (const num of N) {
      if (!numSet.has(num - 1)) {
        let length = 1;
        let currentNum = num + 1;
  
        while (numSet.has(currentNum)) {
          length++;
          currentNum++;
        }
  
        maxLength = Math.max(maxLength, length);
      }
    }
  
    return maxLength;
  }
  const N = [10, 4, 20, 1, 3, 2];
const result = longestConsecutiveSubsequenceLength(N);
console.log(result);  // answer is 4
  

