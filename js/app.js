'use strict';

//=============declared variables==================

var firstName = 'first name';
var freeTimeArray = ['knitting', 'cello', 'puzzles'];
var firstNameAnswer = 'null';
var correctAnswers = 0;

//=============functions=======================
function myName()
{
  firstNameAnswer = prompt('What is your ' + firstName + '?');
  alert('Hello ' + firstNameAnswer + ', welcome to all about me!');
}

function amIaTeacher()
{
  var meghanTeacherGuess = prompt('Was Meghan a teacher?');
  var meghanTeacher = meghanTeacherGuess.toLowerCase();
  if (meghanTeacher === 'yes' || meghanTeacher === 'y') {
    correctAnswers++;
    alert('Correct, Meghan taught at Bright Horizons.');
  } else {
    alert('Incorrect, Meghan was a teacher at Bright Horizons.');
  }
}

function whereIlive()
{
  var stateLiveAnswer = prompt('Does Meghan live in Ohio?');
  var stateLive = stateLiveAnswer.toLowerCase();
  if (stateLive === 'yes' || stateLive === 'y') {
    correctAnswers++;
    alert('Correct, lived in Ohio my whole life.');
  } else {
    alert('Incorrect, Ohio is the heart of it all!');
  }
}

function iPlayCello()
{
  var playCelloAnswer = prompt('Does Meghan play the cello?');
  var playCello = playCelloAnswer.toLowerCase();
  if (playCello === 'yes' || playCello === 'y') 
  {
    correctAnswers++;
    alert('Correct, that\'s the big string instrument still played sitting down.');
  } else
  {
    alert('Incorrect, that\'s the big string instrument still played sitting down.');
  }
}

function iHaveDaughter()
{
  var hasDaughterAnswer = prompt('Does Meghan have a daughter?');
  var hasDaughter = hasDaughterAnswer.toLowerCase();
  if (hasDaughter === 'yes' || hasDaughter === 'y') {
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

function whatIlikeToDo()
{
  for (var i = 0; i < 6; i++) {
    var freeTimeAnswer = prompt('What does Meghan do in her free time?').toLowerCase();
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
  if (nextJob === 'yes' || nextJob === 'y') {
    correctAnswers++;
    alert('Correct');
  } else {
    alert('Incorrect');
  }
}

function finalAlert() {
  alert('It was nice having you ' + firstNameAnswer + '. Hope you enjoyed learning a little about me! You got ' + correctAnswers + ' answers correct, way to go!');
}

//=============function calls======================
myName();
amIaTeacher();
whereIlive();
iPlayCello();
iHaveDaughter();
daughterAge();
whatIlikeToDo();
futureJob();
finalAlert();


