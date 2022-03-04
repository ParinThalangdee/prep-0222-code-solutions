function addTwoNumbers(a, b) {
  return a + b;
}
var sum = addTwoNumbers(2, 2);
console.log('Sum:', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
var hours = convertHoursToMinutes(2);
console.log('Minutes:', hours);

function getGreeting(name) {
  return 'Hello' + ' ' + name;
}
var name = getGreeting('World');
console.log(name);

function addAndMultipleBy5(num1, num2) {
  return (num1 + num2) * 5;
}
var product = addAndMultipleBy5(10, 5);
console.log(product);

function multiplyAndDivideBy5(num1, num2) {
  return num1 * num2 / 5;
}
var quotient = multiplyAndDivideBy5(35, 10);
console.log(quotient);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var difference = subtractTwoNumbers(22, 7);
console.log(difference);

function getCircleCircumference(radius) {
  return (radius * 2) * 3.14159265359;
}
var circumference = getCircleCircumference(5);
console.log(circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var fullName = getFullName('Parin', 'Thalangdee');
console.log(fullName);

function cube(number) {
  return number * number * number;
}
var cubed = cube(5);
console.log(cubed);
