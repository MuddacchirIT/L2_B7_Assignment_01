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

// Problem 3
function checkType(value: number | string): "number" | "string" {
  if (typeof value === "number") {
    return "number";
  }
  return "string";
}
const value = checkType(42);
const valueResult = JSON.stringify(value);
console.log(valueResult);

// Problem 4
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
const user = { id: 1, name: "John Doe", age: 21 };
const nameFind = getProperty(user, "name");
const resultName = JSON.stringify(nameFind);
console.log(resultName);

// Problem 5
type Book = {
  title: string;
  author: string;
  publishedYear: number;
};
const addReadStatus = (book: Book): Book & { isRead: boolean } => ({
  ...book,
  isRead: true,
});
const myBook: Book = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};
const updatedBook = addReadStatus(myBook);
console.log(updatedBook);

// Problem 6
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
class Student extends Person {
  grade: string;
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }
  getDetails() {
    console.log(
      JSON.stringify(
        `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`,
      ),
    );
  }
}

const student = new Student("Alice", 30, "A");
student.getDetails();

// Problem 7
const getIntersection = <T>(arr1: T[], arr2: T[]): T[] => {
  return arr1.filter((item) => arr2.includes(item));
};
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const getArray = getIntersection(array1, array2);
console.log(getArray);
