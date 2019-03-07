// STATE MANAGEMENT

// What is state?

// State is just data
var todos = [
  {
    todo: 'Take out the trash',
    completed: false
  },
  {
    todo: 'Buy a birthday gift',
    completed: false
  },
  {
    todo: 'Pick up eggs and milk at the store',
    completed: true
  }
];
// This is state


var timer = '18:24:00';
// So is this

// Components and scoping state

var data = {
  greeting: 'Hello',
  name: 'there'
};
// This is the state

var greeting = function () {
  return '<p>' + data.greeting + ', ' + data.name + '!</p>';
};
// This is a simple Component

var app = document.querySelector('#app');
app.innerHTML = greeting();
// We can render it like this

// State-based components
var greeting = function () {
  return '<p>' + greeting.data.greeting + ', ' + greeting.data.name + '!</p>';
};
// This is a simple Component

greeting.data = {
  greeting: 'Hello',
  name: 'there'
}
// This is the state

var app = document.querySelector('#app');
app.innerHTML = greeting();
// We can render it like this

// Creating stateful components

// How to use it

var app1 = new Component('#app');
// This works

var app2 = new Component(document.querySelector('#app2'));
// So does this

// Defining a template for your component
var app1 = new Component('#app', {
  template: 'Hello, world!'
});
// Your template can be a string

var app2 = new Component('#app2', {
  template: function () {
    return 'Hello, world!'
  }
});
// It can also be a function that returns a string
// Your template can be a string

// Adding state to the component
var app = new Component('#app', {
  data: {
    greeting: 'Hello',
    name: 'world'
  },
  template: function (props) {
    return props.greeting + ', ' + props.name + '!';
  }
});
// Some data

// Sanitizing state
var app = new Component('#app', {
  data: {
    greeting: 'Hello',
    name: 'world'
  },
  template: function (props) {
    return props.greeting + ', ' + Component.sanitize(props.name) + '!';
  }
});
// Some data

// Rendering your component
var app = new Component('#app', {
  data: {
    greeting: 'Hello',
    name: 'world'
  },
  template: function (props) {
    return props.greeting + ', ' + props.name + '!';
  }
});
// Create a component

app.render();
// Render the component

// Updating your state
app.data.greeting = 'Bonjour';
app.data.name = 'Universe';

app.render();

// The Component() helper function

/**
 * A vanilla JS helper for creating state-based components
 * @param {String|Node} elem    The element to make into a component
 * @param {Object}      options The component options
 */
var Component = (function () {

  'use strict';

  /**
   * Create the Component object
   * @param {String|Node} elem    The element to make into a component
   * @param {Object}      options The component options
   */
  var Component = function (elem, options) {
    if (!elem) throw 'ComponentJS: You did not provide an element to make into a component.';
    this.elem = elem;
    this.data = options ? options.data : null;
    this.template = options ? options.template : null;
  };

  /**
   * Sanitize and encode all HTML in a user-submitted string
   * @param  {String} str  The user-submitted string
   * @return {String}      The sanitized string
   */
  Component.sanitize = function (str) {
    var temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
  };

  /**
   * Render a template into the DOM
   * @return {[type]}                   The element
   */
  Component.prototype.render = function () {

    // Make sure there's a template
    if (!this.template) throw 'ComponentJS: No template was provided.';

    // If elem is an element, use it.
    // If it's a selector, get it.
    var elem = typeof this.elem === 'string' ? document.querySelector(this.elem) : this.elem;
    if (!elem) return;

    // Get the template
    var template = (typeof this.template === 'function' ? this.template(this.data) : this.template);
    if (['string', 'number'].indexOf(typeof template) === -1) return;

    // Render the template into the element
    if (elem.innerHTML === template) return;
    elem.innerHTML = template;

    // Dispatch a render event
    if (typeof window.CustomEvent === 'function') {
      var event = new CustomEvent('render', {
        bubbles: true
      });
      elem.dispatchEvent(event);
    }

    // Return the elem for use elsewhere
    return elem;

  };

  return Component;

})();

// Setting up our plugin
/**
 * A vanilla JS helper for creating state-based components
 * @param {String|Node} elem    The element to make into a component
 * @param {Object}      options The component options
 */
var Component = (function () {

  'use strict';

})();

// Creating the Component object
/**
 * Create the Component object
 * @param {String|Node} elem    The element to make into a component
 * @param {Object}      options The component options
 */
var Component = function (elem, options) {
  if (!elem) throw 'ComponentJS: You did not provide an element to make into a component.';
  this.elem = elem;
  this.data = options ? options.data : null;
  this.template = options ? options.template : null;
};

// Adding a sanitize method
/**
 * Sanitize and encode all HTML in a user-submitted string
 * @param  {String} str  The user-submitted string
 * @return {String}      The sanitized string
 */
Component.sanitize = function (str) {
  var temp = document.createElement('div');
  temp.textContent = str;
  return temp.innerHTML;
};

// Rendering a component
/**
 * Render a template into the DOM
 * @return {[type]}                   The element
 */
Component.prototype.render = function () {

  // Make sure there's a template
  if (!this.template) throw 'ComponentJS: No template was provided.';

  // If elem is an element, use it.
  // If it's a selector, get it.
  var elem = typeof this.elem === 'string' ? document.querySelector(this.elem) : this.elem;
  if (!elem) return;

  // Get the template
  var template = (typeof this.template === 'function' ? this.template(this.data) : this.template);
  if (typeof template !== 'string') return;

  // Render the template into the element
  if (elem.innerHTML === template) return;
  elem.innerHTML = template;

  // Dispatch a render event
  if (typeof window.CustomEvent === 'function') {
    var event = new CustomEvent('render', {
      bubbles: true
    });
    elem.dispatchEvent(event);
  }

  // Return the elem for use elsewhere
  return elem;

};

// About custom events
document.addEventListener('render', function (event) {
  if (event.target.matches('#app')) {
    // Do something...
  }
}, false);








