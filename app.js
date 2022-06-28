                 //ASSIGNMENT NO 8

                 //Question no 1
// Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var num = +prompt("Enter a integer: ")
console.log("Number: " + num)
var round = Math.round(num);
console.log("Round of value: " + round)
var floor = Math.floor(num)
console.log("Floor value: " + floor)
var cell = Math.ceil(num)
console.log("Ceil value: " + cell)


                 //Question no 2
// Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var num = +prompt("Enter a integer: ")
console.log("Number: " + num)
var round = Math.round(num);
console.log("Round of value: " + round)
var floor = Math.floor(num)
console.log("Floor value: " + floor)
var cell = Math.ceil(num)
console.log("Ceil value: " + cell)

                 //Question no 3
// Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

var num = +prompt("Enter a integer: ")
if(num < 0){
    var absnum = num*-1;
    console.log("The Absolute value of " + num + " is " + absnum)

}
else{
    console.log("The Absolute value of " + num + " is " + num)
}


                 //Question no 4
// Write a program that simulates a dice using random() method of JS Math class. 
// Display the value of dice in your browser.:

var num = Math.random() * 6 ;
var num1 = Math.ceil(num);
console.log("Random dice value is: " + num1)

                 //Question no 5
// Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your browser


var num1 = Math.random() * 2;
var num2 = Math.ceil(num1);
console.log(num2)
if(num2 === 1){ 
    console.log("Random coin value : Tails " )
}
if(num2 === 2){
    console.log("Random coin value : Heads " )
}

                 //Question no 6
//Write a program that shows a random number between and 100 in your browser.

var num = Math.random() * 100;
var num1 = Math.ceil(num);
console.log("random number between 1 and 100 is: " + num1)


                 //Question no 7
// Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser. Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

user = prompt("Enter your weigth");

if(user.indexOf('.')){
    
    console.log( "The weight of user is: " + parseFloat(user) + " kilograms")
}
else{
    console.log( "The weight of user is: " + parseInt(user) + " kilograms")

}

                 //Question no 8
// Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.
var user = +prompt("Enter a number between 1 to 10:")
var num = Math.random() * 10;
var num1 = Math.ceil(num);
console.log(num1)
if(num1===user){
    console.log("your guess number is match")
}
if(num1!==user){
    console.log("Try Again!")
}
