# fizzbuzz assignment 4 - Clifford Strong II
## for this assignment i was tasked with making a system that spits out 100 numbers, but certain integers are to be replaced with the words "fizz" or "buzz" of "fizzbuzz" depending on if they are divisible by 3, 5 , or both. 
### I did all of my debugging and figuring out the code by using [eloquent javascript](https://eloquentjavascript.net/code/) the big thing that i had trouble with was figuring out where correctly to close the brackets. I had the code correct for a bit, but didnt have the final bracket to complete it and thus it didnt work for a while. I also had trouble figuring out how to write out some of the variables, particularly in the first line. I made the mistake of having the wrong > in the code. 
### the only code i used was code modifyed from the past [code along in the github](https://github.com/rdwrome/261fa25/blob/main/04ControlFlow/codealong.js) 
#### CODE USED 
#### `for (let i = 1; i <= 100; i++) {`
#### ``  if (i % 3 === 0 && i % 5 === 0) {``
#### `console.log("fizzbuzz");`
#### ``} else if (i % 3 === 0) {``
#### `console.log("fizz");`
#### ``} else if (i % 5 === 0) {``
#### `console.log("buzz");`
#### ``} else {``
#### `console.log(i);`
#### ``  }``
#### ``}``