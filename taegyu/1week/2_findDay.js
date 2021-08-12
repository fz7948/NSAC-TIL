function day(str) {
  const [a, b] = str.split(' ').map(Number);

  const dayList = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  switch (a) {
    case 1:
      return dayList[b % 7];
    case 2:
      return dayList[(31 + b) % 7];
    case 3:
      return dayList[(59 + b) % 7];
    case 4:
      return dayList[(90 + b) % 7];
    case 5:
      return dayList[(120 + b) % 7];
    case 6:
      return dayList[(151 + b) % 7];
    case 7:
      return dayList[(181 + b) % 7];
    case 8:
      return dayList[(212 + b) % 7];
    case 9:
      return dayList[(243 + b) % 7];
    case 10:
      return dayList[(273 + b) % 7];
    case 11:
      return dayList[(304 + b) % 7];
    case 12:
      return dayList[(334 + b) % 7];
  }
}

console.log(day('1 1'));

/*
  문제
  Write a function

    function day(ab);
January 1, 2007 is a Monday. What day is a and b in 2007?
a and b are given in the form of a string, and a space is given between a and b.
The input value is a string and is given in the form of 'a b'.

In 2007, January, March, May, July, August, October and December have 31 days, April, June, September and November have 30 days, and February has 28 days.

Output format: SUN, MON, TUE, WED, THU, FRI, SAT

Examples:
1. day("1 1"); 1/12007 is a MON.
2. day("3 17"); 3/17/2007 is a SAT.

? Let's think of an edge case even if it's not in the test case.
44th April or 44th April, when only one number is given, when the type of the input value is different, etc.

*/
