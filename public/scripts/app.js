"use strict";

console.log("App js is running");

//JSX - JavaScript XML

var template = React.createElement(
  "p",
  null,
  "This is JSX from app.js"
);
var appRoot = document.getElementById('App');

ReactDOM.render(template, appRoot);