// JAVASCRIPT PLUGINS

// Scope

// Global scope
var sandwich = 'tuna';
// this is in the global scope

var logSandwich = function () {
  console.log(sandwich);
  // Will log `tuna` in the console
  // It can access sandwich because it's in the global scope
};
logSandwich();

console.log(sandwich);
// Will also log `tuna` in the console

// Local Scope
var logSandwich = function () {
  var sandwich = 'tuna';
  // this has variable local scope

  console.log(sandwich);
  // Will log `tuna` in the console
  // It can access sandwich because it's scope is local to the function
};
logSandwich();

console.log(sandwich);
// returns "Uncaught ReferenceError: sandwich is not defined"
// `sandwich` is local to the logSandwich() function, and not accessible here

// Lexical Scope
var sandwiches = function () {

  var sandwich = 'tuna';
  // this is in the lexical scope

  var logSandwich = function () {

    console.log(sandwich);
    // Will log `tuna` in the console
    // It can access sandwich because it's in the lexical scope

    var snack = 'chips';
    console.log(snack);
    // Will log `chips` because it's in the local scope

  };
  logSandwich();

  console.log(sandwich);
  // Will also log `tuna` in the console

  console.log(snack);
  // returns "Uncaught ReferenceError: snack is not defined"
  // `snack` is local to the logSandwich() function, and out of the lexical scope
};
sandwiches();

// Defining and updating variables

var sandwich = 'tuna';

var logSandwich = function () {
  var sandwich = 'turkey';
  console.log(sandwich);
  // logs "turkey"
  // Does NOT update the global `sandwich` variable

};
logSandwich();

console.log(sandwich);
// logs "tuna"


var sandwich = 'tuna';

console.log(sandwich);
// logs "tuna"

var logSandwich = function () {
  console.log(sandwich);
  // logs "tuna"

  sandwich = 'turkey';
  // Updates `sandwich` in the global scope

  console.log(sandwich);
  // logs "turkey"

};
logSandwich();

console.log(sandwich);
// logs "turkey"

// let and const

// let
var sandwich = 'tuna';
// The value of `sandwich` is "tuna"

var sandwich = 'chicken';
// The value of `sandwich` is now "chicken"

let chips = 'Cape Cod';
// The value of `chips` is "Cape Cod"

let chips = 'Lays';
// Throws an error: "Uncaught SyntaxError: Identifier 'chips' has already been declared"


let chips = 'Cape Cod';
// The value of `chips` is "Cape Cod"

chips = 'Lays';
// The value of `chips` is now "Lays"

var getChips = function () {

  let chips = 'Wise';
  // This works because it's a different scope

  return chips;
  // Returns "Wise"

};

console.log(chips);
// Logs "Lays" in the console

// const
const sandwich = 'tuna';
// The value of sandwich is "tuna"

sandwich = 'chicken';
// Throws an error: "Uncaught TypeError: Assignment to constant variable."

// Keeping code out of the global scope

var myScripts = function () {
  // Wrapper for your code
  // Your codes goes here...
};

myScripts();
// Run your scripts


; (function (window, document, undefined) {
  // Your code goes here...
})(window, document);

// The Revealing Module Pattern

myPlugin.init();

modal.open();
modal.close();

// Public vs. Private Functions

// The Revealing Module Pattern
var myPlugin = (function () {

  'use strict;'
  // Your code...

})();



var myPlugin = (function () {

  'use strict;'

  var publicAPIs = {};
  // Public APIs

  var someFunction = function () {
    // Do stuff...
  };
  // Private function
  // This can only be run inside of the accordion() function

  publicAPIs.publicFunction = function () {
    // Do other stuff.
  };
  // Public function
  // This can be run from other scripts

  return publicAPIs;
  // Return our public APIs

})();

// An example
var beNice = (function () {

  'use strict';

  var publicAPIs = {};
  // My public methods will get added to this object

  var saySomethingNice = function (somethingNice) {
    alert(somethingNice);
  };
  // A private method

  publicAPIs.smile = function (message) {
    if (message) {
      saySomethingNice(message);
    } else {
      saySomethingNice('You make the world better just by being you!');
    }
  };
  // A public method

  return publicAPIs;
  // Return our public methods so that they can be accessed

})();

beNice.smile()
// It will show an alert with a nice message

saySomethingNice()
// Uncaught ReferenceError: saySomethingNice is not defined

// Plugin User Options

var sayHi = (function () {

  'use strict;'

  var publicAPIs = {};
  // Public APIs

  publicAPIs.init = function () {
    // Do something...
  };

  return publicAPIs;

})();

// Setting up defaults
var sayHi = (function () {

  'use strict;'

  var publicAPIs = {};
  // Public APIs

  var defaults = {
    askForName: true,
    nameMessage: 'What is your name?',
    helloMessage: function (name) {
      return 'Hi there, ' + name + '! You look nice today.';
    }
  };
  // Defaults

  publicAPIs.init = function () {
    // Do something...
  };

  return publicAPIs;

})();

// Passing in User Options
var sayHi = (function () {

  'use strict;'

  var publicAPIs = {};
  // Public APIs

  var defaults = {
    askForName: true,
    nameMessage: 'What is your name?',
    helloMessage: function (name) {
      return 'Hi there, ' + name + '! You look nice today.';
    }
  };
  // Defaults

  publicAPIs.init = function (options) {
    // Do something...
  };

  return publicAPIs;

})();

// Merging user options with defaults
var sayHi = (function () {

  'use strict;'

  //
  // Variables
  //

  var publicAPIs = {};
  var settings;
  // Public APIs

  var defaults = {
    askForName: true,
    nameMessage: 'What is your name?',
    helloMessage: function (name) {
      return 'Hi there, ' + name + '! You look nice today.';
    }
  };
  // Defaults

  //
  // Methods
  //

  // https://vanillajstoolkit.com/helpers/extend/
  /**
   * Merge two or more objects. Returns a new object.
   * @param {Object}   objects  The objects to merge together
   * @returns {Object}          Merged values of defaults and options
   */
  var extend = function () {

    // Variables
    var extended = {};

    // Merge the object into the extended object
    var merge = function (obj) {
      for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
          extended[prop] = obj[prop];
        }
      }
    };

    // Loop through each object and conduct a merge
    for (var i = 0; i < arguments.length; i++) {
      merge(arguments[i]);
    }

    return extended;

  };

  publicAPIs.init = function (options) {

    settings = extend(defaults, options || {});
    // Merge user options into the defaults

  };

  return publicAPIs;

})();

// Use settings in your script
var sayHi = (function () {

  'use strict;'

  //
  // Variables
  //

  var publicAPIs = {};
  var settings;
  // Public APIs

  var defaults = {
    askForName: true,
    nameMessage: 'What is your name?',
    helloMessage: function (name) {
      return 'Hi there, ' + name + '! You look nice today.';
    }
  };
  // Defaults


  //
  // Methods
  //

  // https://vanillajstoolkit.com/helpers/extend/
  /**
   * Merge two or more objects. Returns a new object.
   * @param {Object}   objects  The objects to merge together
   * @returns {Object}          Merged values of defaults and options
   */
  var extend = function () {

    // Variables
    var extended = {};

    // Merge the object into the extended object
    var merge = function (obj) {
      for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
          extended[prop] = obj[prop];
        }
      }
    };

    // Loop through each object and conduct a merge
    for (var i = 0; i < arguments.length; i++) {
      merge(arguments[i]);
    }

    return extended;

  };

  var hi = function () {

    if (settings.askForName) {
      // If we should ask for the visitor's name

      var name = prompt(settings.nameMessage);
      // Ask for their name using the nameMessage setting

      if (name) {
        alert(settings.helloMessage(name));
      } else {
        alert(settings.helloMessage('friend'));
      }
      // If they provide a name, use it.
      // Otherwise, fall back to "friend"
    }
    else {
      alert(settings.helloMessage(''));
    }
    // Otherwise, just say hi

  };

  publicAPIs.init = function (options) {

    settings = extend(defaults, options || {});
    // Merge user options into the defaults

    hi();
    // Say hello

  };

  return publicAPIs;

})();

// Using our Plugin
sayHi.init();

sayHi.init({
  askForName: false
});
// Don't ask for a name

sayHi.init({
  nameMessage: 'Name, dude?',
  helloMessage: function (name) {
    return 'Looking gnarly, ' + name + '!';
  }
});
// Customize the messages










