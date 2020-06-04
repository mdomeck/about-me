'use strict';

/*Ask name through prompt and give response*/

var firstName = 'first name';

var firstNameAnswer = prompt('What is your ' + firstName + '?');
console.log('firstNameAnswer', firstNameAnswer);

alert('Hello ' + firstNameAnswer + ', welcome to all about me!');

// Prompt 5 yes or no questions

var correctAnswers = 0;

amIaTeacher();
whereIlive();

function amIaTeacher()
{
  var meghanTeacherGuess = prompt('Was Meghan a teacher?');
  var meghanTeacher = meghanTeacherGuess.toLowerCase();
  console.log('meghanTeacher', meghanTeacher);
  console.log('correctAnswers before', correctAnswers);
  if (meghanTeacher === 'yes' || meghanTeacher === 'y') {
    correctAnswers++;
    alert('Correct, Meghan taught at Bright Horizons.');
  } else {
    alert('Incorrect, Meghan was a teacher at Bright Horizons.');
  }
}

// console.log('correctAnswers after', correctAnswers);

function whereIlive()
{
  var stateLiveAnswer = prompt('Does Meghan live in Ohio?');
  var stateLive = stateLiveAnswer.toLowerCase();
  console.log('stateLive', stateLive);

  if (stateLive === 'yes' || stateLive === 'y') {
    correctAnswers++;
    alert('Correct, ');
  } else {
    alert('Incorrect');
  }
}

function iPlayCello()
{
  var playCelloAnswer = prompt('Does Meghan play the cello?');
  var playCello = playCelloAnswer.toLowerCase();
  console.log('playCello', playCello);

  if (playCello === 'yes') 
  {
    correctAnswers++;
    alert('Correct');
  } else 
  {
    alert('Incorrect');
  }
}

function iHaveDaughter()
{
  var hasDaughterAnswer = prompt('Does Meghan have a daughter?');
  var hasDaughter = hasDaughterAnswer.toLowerCase();
  console.log('hasDaughter', hasDaughter);

  if (hasDaughter === 'yes') {
    correctAnswers++;
    alert('Correct');
  } else {
    alert('Incorrect');
  }
}

function daughterAge()
{
// Add question resulting in a number and give 4 chances
  for (var i = 0; i < 4; i++) //Allows up to 4 guesses
  {
    var howOldDaughterAnswer = prompt('How old is Meghan\'s daughter?');
    var howOldDaughter = howOldDaughterAnswer.toLowerCase();
    console.log('howOldDaughter', howOldDaughter);

    if (howOldDaughter === '8') {
      correctAnswers++;
      alert('You got it!');
      break;
    } else if (howOldDaughter > 8) {
      alert('too high');
    } else if (howOldDaughter < 8) {
      alert('too low');
    } else {
      alert('Please enter a number between 1 and 10');
    }
  }
}

var freeTimeArray = ['knitting', 'cello', 'puzzles'];

function whatIlikeToDo()
{
  for (var i = 0; i < 6; i++) {
    var freeTimeAnswer = prompt('What does Meghan do in her free time?').toLowerCase();
    console.log('freeTimeAnswer', freeTimeAnswer);

    if (freeTimeAnswer === freeTimeArray[0] || freeTimeAnswer === freeTimeArray[1] || freeTimeAnswer === freeTimeArray[2]) {
      correctAnswers++;
      alert('Correct');
      break;
    }
    else if (freeTimeAnswer !== freeTimeArray) {
      alert('Try again');
    }
  }
  alert('Meghan enjoys knitting, jigsaw puzzles and playing the cello');
}

function futureJob()
{
  var nextJobAnswer = prompt('Is Meghan a software developer?');
  var nextJob = nextJobAnswer.toLowerCase();
  console.log('nextJob', nextJob);

  if (nextJob === 'yes') {
    correctAnswers++;
    alert('Correct');
  } else {
    alert('Incorrect');
  }
}
alert('It was nice having you ' + firstNameAnswer + '. Hope you enjoyed learning a little about me! You got ' + correctAnswers + ' answers correct, way to go!');
