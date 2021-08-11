function balancedParens(str) {
  const stack = [];

  for (let char of str) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else if (char === ')') {
      if (stack[stack.length - 1] === '(') {
        stack.pop();
      } else {
        return false;
      }
    } else if (char === '}') {
      if (stack[stack.length - 1] === '{') {
        stack.pop();
      } else {
        return false;
      }
    } else if (char === ']') {
      if (stack[stack.length - 1] === '[') {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0 ? true : false;
}

/*
  문제
  write a function that takes a string of text and returns true if the parentheses are balanced and false otherwise.

Example:
balancedParens('('); // false
balancedParens('()'); // true
balancedParens(')('); // false
balancedParens('(())'); // true

Step 2:
make your solution work for all types of brackets

Example:
balancedParens('{}'); // true
balancedParens('({})'); // true

balancedParens('({)}'); // false
Step 3:
ignore non-bracket characters
balancedParens(' var wow = { yo: thisIsAwesome() }'); // true
balancedParens(' var hubble = function() { telescopes.awesome();'); // false

*/
