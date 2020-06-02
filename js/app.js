'use strict';

var firstName = 'first name';
var meghanTeacher = 'teacher';


var firstNameAnswer = prompt('What is your' + firstName + '?');
console.log('firstNameAnswer', firstNameAnswer);

alert('Hello' + firstNameAnswer + ' , welcome to all about me!');

var meghanTeacherGuess = confirm('Was Meghan a ' + meghanTeacher + '?');
console.log('meghanTeacherGuess', meghanTeacherGuess);

if (meghanTeacherGuess === true){
  alert('Correct');
} else {
  alert('Incorrect');
}

// var stateLiveResponse = 

