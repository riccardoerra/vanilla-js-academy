// MANIPULATING DATA

// String to Array

var text = 'Soda, turkey sandwiches, potato chips, chocolate chip cookies';
var menu = text.split(', ');
var limitedMenu = text.split(', ', 2);
// menu: ["Soda", "turkey sandwiches", "potato chips", "chocolate chip cookies"]
// limitedMenu: ["Soda", "turkey sandwiches"]

// Replacing content in a string

var text = 'I love Cape Cod potato chips!';
var lays = text.replace('Cape Cod', 'Lays');
var soda = text.replace('Cape Cod potato chips', 'soda');
var extend = text.replace('Cape Cod', 'Cape Cod salt and vinegar');
// lays: 'I love Lays potato chips!'
// soda: 'I love soda!'
// extend: 'I love Cape Cod salt and vinegar potato chips!'


// Item Length

'Hello there!'.length;
// returns 12
['sandwich', 'soda', 'chips', 'cookie'].length;
// returns 4

// Manipulating Arrays

// Array.every()
[12, 25, 42, 99, 101].every(function (item) {
  return item > 10;
});
// Returns true
[1, 12, 25, 42, 99, 101].every(function (item) {
  return item > 10;
});
// Returns false

// Array.some()
[12, 25, 42, 99, 101].some(function (item) {
  return item > 10;
});
// Returns true
[1, 12, 25, 42, 99, 101].some(function (item) {
  return item > 10;
});
// Returns true
[1, 1, 3, 7, 9, 10].some(function (item) {
  return item > 10;
});
// Returns false

// Array.filter()
var newArray = [1, 2, 7, 42, 99, 101].filter(function (item) {
  return item > 10;
});

console.log(newArray);
// Logs [42, 99, 101]

// Array.find()
var sandwiches = ['turkey', 'chicken salad', 'tuna', 'pb&j', 'egg salad'];

var getTuna = sandwiches.find(function (sandwich) {
  return sandwich === 'tuna';
});

console.log(getTuna);
// Logs "tuna"

var getHamburger = sandwiches.find(function (sandwich) {
  return sandwich === 'hamburger';
});

console.log(getHamburger);
// Logs undefined

// Shuffling an Array

/**
 * Randomly shuffle an array
 * https://stackoverflow.com/a/2450976/1293256
 * @param  {Array} array The array to shuffle
 * @return {String}      The first item in the shuffled array
 */
var shuffle = function (array) {

  var currentIndex = array.length;
  var temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;

};

var lunch = ['sandwich', 'soda', 'chips', 'cookie'];

shuffle(lunch);
// Shuffle lunch

var shuffledLunch = shuffle(lunch.slice());
// Create a new, shuffled array from lunch

