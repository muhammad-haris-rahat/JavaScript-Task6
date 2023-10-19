//?  Chapter 35 - 38

//* Question # 1

// function date(){
//     dt = new Date ();
//     console.log(dt)
// }
// date();


//* Question # 2

// function greet (){
//     var firstName = prompt("Enter your first Name: ")
//     var lastName = prompt("Enter your last Name: ")
//     console.log("Hello " + firstName +" " + lastName)

// }
// greet();


//* Question # 3

// function sum (a , b){
//     a = +prompt("Enter first number: ")
//     b = + prompt("Enter second number: ")
//     console.log(a+b)
// }
// sum();


//* Question # 4


// function calculator(num1 , num2 , operator ){
//     num1 = +prompt("Enter first number: ");
//     num2 = + prompt("Enter second number: ");
//     operator = prompt ("Enter operator(+ , - , * , / ) :");
//     if (operator === "+"){
//         console.log(num1 + num2);
//     }if (operator === "-"){
//         console.log(num1 - num2);
//     }if (operator === "*"){
//         console.log(num1 * num2);
//     }if (operator === "/"){
//         console.log(num1 / num2);
//     }
// }
// calculator();


//* Question # 5

// function square(){
//     Number = + prompt("Enter a number : ")
//     console.log(Number**2)
// }
// square();


//* Question # 6

// function factorial(){
//     var number = + prompt("Enter a Number : ")
//     if (number === 0){
//         console.log("1")
//     }else{
//         fact = 1 
//         for(var i = 1 ; i <= number ; i++){
//             fact = fact * i
//         }console.log(fact)
//     }
// }

// factorial();


//* Question # 7

// function count(){
//     var startNumber = + prompt("Enter starting number : ");
//     var endNumber = + prompt("Enter ending number : ");
//     var counting = 0 ;
//     for (var i = startNumber ; i <= endNumber ; i++ ){
//         counting = counting + 1;
        
//     }console.log(counting);
// }
// count();


//* Question # 8

// function calculateHypotenuse(base , perpendicular){
//     var base = + prompt("Enter value of base :");
//     var perpendicular = + prompt("Enter value of perpendicular :");
//     var hypotenuse = Math.sqrt(base**2 + perpendicular**2);
//     console.log(hypotenuse);
// }
// calculateHypotenuse();


//* Question # 9

//! Argument as number

// function calculateArea(width , height){
//     var area = width * height
//     console.log(area)
// }
// calculateArea(2,4)

//! Argument as variable

// function calculateArea(){
//     width = 2
//     height = 4
//     var area = width * height
//     console.log(area)
// }
// calculateArea(width , height)


//* Question # 10

// function palindrome(){
//     var userInput = prompt("Enter a word : ")
//     userInput = userInput.toLowerCase()
//     var reverse = userInput.split("").reverse().join("")
//     if(userInput === reverse){
//         console.log("It is palindrome")
//     }else{
//         console.log("It is not palindrome")
//     }
// }
// palindrome();


//* Question # 11

// function capitalizer(word){
//   var myWord = word.split(" ")
//   var result = " "
//   for(var i = 0 ; i < myWord.length ; i++){
//     var newVar = myWord[i]
//     var letterToCapital = newVar[0].toUpperCase()
//     result = result + letterToCapital

//     for(var j = 1 ; j < newVar.length ; j++){
//       result = result + newVar[j]
//     }
//     result = result + " "
//   }
//   console.log(result)
// }
// capitalizer("the quick brown fox")


//* Question # 12

// function longestWord(word){
//   var myWord = word.split(" ")
//   var array = []
//   for(var i = 0 ; i < myWord.length ; i++){
//     array.push(myWord[i].length)
//   }
//   array.sort(function(a,b){
//     return a-b
//   })

//   var longestWord = array[array.length - 1]

//   for(i = 0 ; i < myWord.length ; i++){
//     if(myWord[i].length === longestWord){
//       console.log(myWord[i])
//     }
//   }
// }
// longestWord("Web Development Tutorial")


//* Question # 13

// function countWords(word,occur){
//   var count = 0
//   for(var i = 0 ; i < word.length ; i ++){
//     var test = word[i].toLowerCase()
//     if(test === occur.toLowerCase()){
//       count = count + 1
//     }
//   }
//   if (count){
//     console.log(count)
//   }else{
//     console.log("Not Found")
//   }
// }
// countWords("JSResources.com" , "o")


//* Question # 14

//! First Function 

// function calCircumference(){
//   var radius = +prompt ("Enter radius of a circle: ")
//   var circumferenceOfCircle = 2 * 3.14 * radius
//   console.log(circumferenceOfCircle)
// }
// calCircumference()

//! Second Function 

// function calculateArea(){
//   var radius = +prompt ("Enter radius of a circle: ")
//   var areaOfCircle = 3.14 * radius**2
//   console.log(areaOfCircle)
// }
// calculateArea()