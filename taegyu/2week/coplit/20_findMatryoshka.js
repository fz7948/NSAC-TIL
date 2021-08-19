function findMatryoshka(matryoshka, size) {
  if (!matryoshka) return false;

  if (matryoshka.size === size) return true;
  else if (matryoshka.size < size) return false;
  return findMatryoshka(matryoshka.matryoshka, size);
}

const matryoshka = {
  size: 10,
  matryoshka: {
    size: 9,
    matryoshka: null,
  },
};

let output = findMatryoshka(matryoshka, 10);
console.log(output); // --> true

output = findMatryoshka(matryoshka, 8);
console.log(output); // --> false

/*
문제
findMatryoshka
Question
You must enter the object and number of objects containing information about the Russian traditional doll Matryoshka and return whether there is a doll that meets the conditions.

Input
Parameter 1: matryoshka
Recursively defined objects that have properties 'matryoshka', 'size' (input-output See an example).
matryoshka.matryoshka is null or a matryoshka object
matryoshka.size becomes smaller as it overlaps.
Parameter 2: size
number type
Output
You must return the boolean type.
Constraints
The function findMatryoshka is created in the form of a recursive function.
The use of repeat statements (for, while) is prohibited.
The object received must remain in the initial state after the function's call.
If you receive an empty object, you must return false
I/O Example
const matryoshka = {
  size: 10,
  matryoshka: {
    size: 9,
    matryoshka: null,
  },
};

let output = findMatryoshka(matryoshka, 10);
console.log(output); // --> true

output = findMatryoshka(matryoshka, 8);
console.log(output); // --> false
*/
