'use strict';

var firstName = 'first name';


var firstNameAnswer = prompt('What is your ' + firstName + '?');
console.log('firstNameAnswer', firstNameAnswer);

alert('Hello ' + firstNameAnswer + ', welcome to all about me!');

var meghanTeacherGuess = prompt('Was Meghan a teacher?');
console.log('meghanTeacherGuess', meghanTeacherGuess);

if (meghanTeacherGuess === 'yes' || 'Yes') {
  alert('Correct');
} else {
  alert('Incorrect');
}

var stateLiveAnswer = prompt('Does Meghan live in Washington?');
console.log('stateLiveAnswer', stateLiveAnswer);

if (stateLiveAnswer === 'no' || 'No') {
  alert('Correct, she lives in Ohio!');
} else {
  alert('Incorrect, she lived in Ohio!');
}

var playCelloAnswer = prompt('Does Meghan play the cello?');
console.log('playCelloAnswer', palyCelloAnswer);

if (playCelloAnswer === 'yes' || 'Yes') {
  alert('Correct');
} else {
  alert('Incorrect');
}



