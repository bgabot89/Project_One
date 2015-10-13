//1.

var sayHello = function(){
	console.log ("Hello");
}
sayHello();


//2.

//Rewrite 'sayHello' to accept a name as a parameter, and logs 'Hello' + the name to the console.
var sayHello = function(FirstName){
	var FirstName='Brian';
	console.log ("Hello" + ' '+ FirstName);
}
sayHello();


//3.

//Write a multiply function that finds the product of two numbers.

function Multiply(x,y){
	return x*y;
}
console.log (Multiply(5,5));

//4. 

/* Write a 'negative' function that takes an integer, and if that integer is positive, 
it turns it into a negative integer and returns that integer.*/

function findNegative(x){
	if (x>0){
		x = (1-2);
		return x;
	}
	else
	return 'value is negative'; 
}
console.log(findNegative(3));

//5.

/* Write a function that takes in a number and 
returns true if the number is even and false if the number is odd (Hint: Look up the % operator).*/

function IsEven(x){
if (x%2 === 0){
	return true;
}
else if (x%3 === 0){
	return false;
}
}
IsEven(4);

//6. 

//Write a function that generates a random number in a specified range (Hint: Look up Math.random()).
function getRand(min,max){
return Math.random() * (max - min) + min;
}
getRand(1,5);


//7.

//Write a function that generates an array of specified length that contains random numbers from 1 to 100.

var oldArray = [];
function randArr(x){
for (var i=0; i< x; i++){
    //this number will find a randomNumber between 1 to 100
var randNumber= (Math.floor(Math.random() * 100) + 1);
    oldArray.push(randNumber);
}
return oldArray;
}
randArr(3); 

//8. Write a function that swaps two values at two different indexes in an array.
var arr = ["moe", "larry", "curly"];
function swap(arr, x, y){
var tmp = arr[x];
arr[x] = arr[y];
arr[y] = tmp;
return arr;
}

console.log(swap(["moe", "larry", "curly"], 0, 2));










