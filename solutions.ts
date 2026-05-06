// Problem 1:

function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((num) => num % 2 === 0);
}
const allDigits = [1, 2, 3, 4, 5, 6];
const evenDigits = filterEvenNumbers(allDigits);
console.log(evenDigits);

// Problem 2

function reverseString(str: string): string {
  return str.split("").reverse().join("");
}
const normally = "typescript";
const result = JSON.stringify(reverseString(normally));
console.log(result);
