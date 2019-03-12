module.exports = function check(str, bracketsConfig) {
  let stack =[],
      leftDNA = bracketsConfig.map(function(p) {return p[0]}),
      rightDNA = bracketsConfig.map(function(p) {return p[1]});
  for (let i = 0; i < str.length; i++) {
    if (str[i] == rightDNA[leftDNA.indexOf(stack[stack.length-1])]) 
      stack.pop()
    else stack.push(str[i]);
  }
  return (!stack.length);
}