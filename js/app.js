'use strict';

/*Ask name through prompt and give response*/

var firstName = 'first name';

var firstNameAnswer = prompt('What is your ' + firstName + '?');
// console.log('firstNameAnswer', firstNameAnswer);

alert('Hello ' + firstNameAnswer + ', welcome to all about me!');

// Prompt 5 yes or no questions

var meghanTeacherGuess = prompt('Was Meghan a teacher?');
var meghanTeacher = meghanTeacherGuess.toLowerCase();
// console.log('meghanTeacher', meghanTeacher);

if (meghanTeacher === 'yes') {
  alert('Correct, Meghan taught at Bright Horizons.');
} else {
  alert('Incorrect, Meghan was a teacher at Bright Horizons.');
}

var stateLiveAnswer = prompt('Does Meghan live in Ohio?');
var stateLive = stateLiveAnswer.toLowerCase();
// console.log('stateLive', stateLive);

if (stateLive === 'yes') {
  alert('Correct, ');
} else {
  alert('Incorrect');
}

var playCelloAnswer = prompt('Does Meghan play the cello?');
var playCello = playCelloAnswer.toLowerCase();
// console.log('playCello', playCello);

if (playCello === 'yes') {
  alert('Correct');
} else {
  alert('Incorrect');
}
var hasDaughterAnswer = prompt('Does Meghan have a daughter?');
var hasDaughter = hasDaughterAnswer.toLowerCase();
// console.log('hasDaughter', hasDaughter);

if (hasDaughter === 'yes') {
  alert('Correct');
} else {
  alert('Incorrect');
}

var nextJobAnswer = prompt('Is Meghan a software developer?');
var nextJob = nextJobAnswer.toLowerCase();
// console.log('nextJob', nextJob);

if (nextJob === 'yes') {
  alert('Correct');
} else {
  alert('Incorrect');
}

alert('It was nice having you ' + firstNameAnswer + '. Hope you enjoyed learning a little about me!');
