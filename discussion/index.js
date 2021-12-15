
//Create a function that will count to a series of number depending on the input of the user.

//get the value of the input field. in order to get the value of the input, using a dot(.) notation call out it's value property.
//selection control structure

//THERE ARE 5 WAYS to select element (5 DOM selectors)
   //1. getElementByTagName() //collective through the use of the element/tag name
   //2. getElementByClassName() //collective through the use of their class attributes. 
   //3. getElementById() // select a distinct/specific elements through the use of it's id attribute.
   //4. querySelector() // neutral/versatile selection.
   //5. querySelectorAll() // collective approach when selecting multiple components/elements at once.
function countUsingWhile() {
    let input1 = document.getElementById('task1').value;
    if (input1 <= 0) {
      // NOT VALID
      //inform the user that the input is not Valid.
      //innerHTML property.
      let msg = document.getElementById('message');
      msg.innerHTML = 'Value not valid';

    } else {
      //VALID
    while (input1 !== 0) {
      //what will happen if the condition has not/been met.
    alert(input1);
    input1-- //decrease the value of the input by 1 per iteration of the loop.

    }
    }

}

//Create a function that will count to a series of number depending on the value inserted by the user.

function countUsingDoWhile() {
   //get the input of the user
   let number = document.getElementById('task2').value;
   //Make sure that the value is valid(wont accept that are <= 0)
   if (number <= 0) {
      //the value is not VALID.
      //inform the user that he cant proceed
      //using DOM selector we will target the container element.
      let displayText = document.getElementById('info');
      displayText.innerHTML = 'The number is Not Valid!';
   } else {
      //PROCEED because the value is VALID
      // alert(number);
      // syntax:
      // do{
      //    //body of the loop
      // }while (condition)
      //task: count from 1 to n (depending on the value inserted by the user.)
      let indexStart = 1
         //the block of code indentified here will be executed first.
         let displayText = document.getElementById('info');
         displayText.innerHTML = number + ' is Valid';
      do {
         alert('count value: ' + indexStart); //to display the changes in the value of the indexStart variable.
         indexStart++ // a value of 1 was added because the value was incremented.
      }while (indexStart <= number);
   }
}

//[SECTION] For Loop

/* syntax: for (initialization; expression/condition; finalExpression/iteration) {
   statement of procedures
 }*/

 //TASK: count to a series of number depending on the value inserted by the user.

 function countUsingForLoop() {
   //get the input from the user using dom selector
   let data = document.getElementById('task3').value;

   let res = document.getElementById('response');
   //validate if the value of the data is what we desire.
   if (data <= 0) {
      //notify the user
      res.innerHTML = 'Input Invalid!';
   } else {
      //initialization; condition ; iteration
      for (let startCount = 0; startCount <= data ; startCount++) {
         //since the start of the count started with 0 then for every iteration we should add a value of 1 to eventually meet the condition and terminate its process.
         //describe what will happen per iteration
         alert('This is the value in this iteration: ' + startCount); //print each value of each interation before the process terminates.
      }
   }
 }

 //[SECTION] How to access elements of a string using repetition control structures?

 function accessElementInString() {
   // get the input of the user. using DOM selectors
  let name = document.getElementById('userName').value;
  let textLength = document.getElementById('stringLength');
  // alert(typeof name); this is just a checker

  //validate and make sure that the input is NOT equivalent to blank.
  if (name !=='') {
   //response if truthy(valid)
   
 //analyze the value that will be inserted by the user.
   //1. determine the length of the string.
       //-> invoke the "length" property of a string using (.) notation.

       textLength.innerHTML = 'The String is ' + name.length + ' characters long';

       //Upon accesssing elements inside a string. this can be done so, using []square brackets.
       //keep in mind we can access each element through the use of it's index number/count
       //the count will start from 0 (first character inside the string corresponds to the number 0), the next is 1 and up to the "nth" number
   //     console.log(name[0]);
      // console.log(name[1]);
      // console.log(name[2]);
      // console.log(name[3]);
      // console.log(name[4]);
      // console.log(name[5]);
      // console.log(name[6]); 
      //we will now use the concept of loops in order to produce a much more flexible response for the user's input
      for ( let startIndex = 0; startIndex < name.length; startIndex++ ) {
         //access each element and display it inside the console
               console.log(name[startIndex]);
             }     
  } else {
   //response if falsy
   alert('value is invalid');
  }
 }

 //how to access elements of string? - [value/index]

 //Behavior: If the string provided is an odd number, the middle character does not need to be checked.

 // Create a loop through half of the string's character that checks if the letters at the front and back of the string are the same.

//Detect if the word is a palindrome.
function detectPalindrome() {
   //1. get input using DOM selectors
   let word = document.getElementById('word').value;
   let response = document.getElementById('detectPalindrome'); 
   // alert(word);//checker
   //2. Validate the data if it is indeed the correct type of info.
   if (word !== "") {
      //identify how long the word is.
      let wrdLength = word.length //
      //initialization -> identify the starting point of the loop.
      //condition -> describes how the loop will progress and terminated.
      //iteration -> how to advance to the next process.
      for (let index = 0;index < wrdLength / 2; index++) {
         //instruction that will happen upon each iteration of the loop.
         //Get the current element in the string according to the index count
         //Get the last element of the string by deducting 1, in the current length of the string since the index count of each element inside a string starts with 0.
         if (word[index] !== word[wrdLength - 1 - index]) {

            //response
            // alert('Value is Valid');

            response.innerHTML = word + '<h3 class="text-primary">  is Not a Palindrome </h3>';

         } else {
            console.log(word[index] + ' is the same as ' + word[wrdLength - 1 - index]);
            response.innerHTML = word + '<h3 class="text-success"> is a Palindrome </h3>';
         }
      }

   } else {
      //response
      // alert('Value is Invalid');
      response.innerHTML = '<h3 class="text-danger"> Value is Invalid </h3>';
   }
}

//Create a function that will allow us to only display the odd numbers from a set of integers.

function getOddNumbers(){
   //target the value of the input field
   let inputCount = document.getElementById('value4').value;
   let res = document.getElementById('getOddNum');
   // alert(inputCount); //checker
   //validate the data to make sure to only get positive numbers
   if (inputCount > 0) {
      //response if pass
      //Create a loop that will produce the set of numbers depending on the input of the user. 
      for (let count = 1; count <= inputCount; count+=2) {
      //Create another logic that will tweak out the even numbers away from the set of number
      console.log(count);
       if (inputCount % 2 === 0) {
         //even number
         continue;       
       }
      }
      //print out the series of numbers inside the console
      // res.innerHTML = '<h3 class="text-warning">Proceed</h3>';
   } else {
      //response when fail
      res.innerHTML = '<h3 class="text-danger">The Number should be greater than 0</h3>';
   }
}

/*open class activity answers
1. Write a for loop that prints counts down from the variable number to 50 (inclusive). If the number is divisible by 10, skip to the next iteration of the loop. Otherwise, print the number. If the number is divisible by 5 (but not 10), also print the string is divisible by 5 on a new line.

for (let count=number; count >= 50; count--) { // Loop from number to 50 counting down
    if (count % 10 === 0) {
        // If a number is divisible by 10, skip to the next iteration by using the continue keyword
        continue;
    }
    console.log(count); // all other numbers are printed
    if (count % 5 === 0) { // Number is divisible by 5 but not 10, so print "is divisible by 5"
        console.log("is divisible by 5");
    }
}


2. Write a function stringWithoutVowels(initialString) that returns a new string which is the initial strings without any vowels (a, e, i, o, u)

function stringWithoutVowels(initialString) {
    // Your code here!
    let newString = "";
    for (let i=0; i<initialString.length; i++) {
        var ch = initialString[i];
        var lowerCasedCh = ch.toLowerCase();
        if (lowerCasedCh == "a" || lowerCasedCh == "e" || lowerCasedCh == "i" || lowerCasedCh == "o" || lowerCasedCh == "u") {
            continue;
        } else {
            newString += ch;
        }
    }
    return newString;
}


*/