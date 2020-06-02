require('../css/style.css');
let people = require('./people.js');

people.forEach(function (value, key) {
  document.body.innerHTML += "<h1>" + value.name + "</h1>";
});

console.log(people[0].name);
