let greet = function (name) {
  return 'hi: ' + name;
};
let exclaim = function (statement) {
  return statement.toUpperCase() + '!';
};
let welcome = compose(greet, exclaim);
welcome('phillip'); // 'hi: PHILLIP!'
console.log(welcome('phillip'));
function compose(...cbList) {
  cbList.reverse();
  return (parameter) => {
    for (let cb of cbList) {
      parameter = cb(parameter);
    }
    return parameter;
  };
}

var add2 = function (number) {
  return number + 2;
};
var multiplyBy3 = function (number) {
  return number * 3;
};
function pipe(...cbList) {
  return (x) => {
    for (let cb of cbList) {
      x = cb(x);
    }
    return x;
  };
}

console.log(pipe(add2, multiplyBy3)(5));

/*
Write Compose and Pipe functions.

Step 1: Implement the function Compose:
Compose should return a function that is the composition of a list of
functions of arbitrary length.

Each function is called on the return value of the function that follows.

You can view compose as moving right to left through its arguments.

Compose Example:

  let greet = function(name){ return 'hi: ' + name;}
  let exclaim = function(statement) { return statement.toUpperCase() + '!';}
  let welcome = compose(greet, exclaim);
  welcome('phillip'); // 'hi: PHILLIP!'
Step 2: Implement the function Pipe:
Pipe composes a series of functions and returns the resulting function.

Each function is called on the return value of the preceding function.
You can view pipe as moving left to right through its arguments.

Pipe Example:
var add2 = function(number){ return number + 2; }
var multiplyBy3 = function(number){ return number * 3; }
pipe(add2, multiplyBy3)(5) // 21
pipe(add2, multiplyBy3, multiplyBy3)(5) // 63

*/
