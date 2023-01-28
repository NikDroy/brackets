module.exports = 

function check(str, bracketsConfig) {
  let stack = [];
  let openBrackets = [];
  let PAIR_BRACKETS = {};
  
  for (key in bracketsConfig) {
    openBrackets[key] = bracketsConfig[key][0];
    PAIR_BRACKETS[bracketsConfig[key][1]] = bracketsConfig[key][0];
  }

  for (i = 0; i < str.length; i++) {
    let topEl = stack[stack.length - 1];
    if (PAIR_BRACKETS[str[i]] == topEl && stack.length !== 0) {
      stack.pop();
    } else if(openBrackets.includes(str[i])){
      stack.push(str[i]);
    } else {
      if (stack.length == 0) {
        return false;
      }
    }
  }
  
  return stack.length == 0;
}
// console.log(check('([{}])', config3))