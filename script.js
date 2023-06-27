// Good Luck 💪🏾
function plusHashCount(str) {
    var hashCount = 0;
    var plusCount = 0;
    
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '#') {
        hashCount++;
      } else if (str[i] === '+') {
        plusCount++;
      }
    }
    
    return {
      hashes: hashCount,
      pluses: plusCount
    };
  }
console.log(plusHashCount("###+")); 
console.log(plusHashCount("##+++#"));  
console.log(plusHashCount("#+++#+#++#")); 
console.log(plusHashCount(""));  