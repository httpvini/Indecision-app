'use strict';

console.log("App js is running");
//JSX - JavaScript XML

var app = {
    title: 'Incecision App',
    subtitle: 'Info'
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'ul',
        null,
        React.createElement(
            'li',
            null,
            'Alfred'
        ),
        React.createElement(
            'li',
            null,
            'Bruce'
        )
    )
);

var user = {
    name: 'Marcus',
    age: 26,
    location: 'Rio de Janeiro'
};
function getLocation(location) {
    if (location) {
        return location;
    } else {
        return 'Unknown';
    }
};
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        getLocation(user.location)
    )
);

var appRoot = document.getElementById('App');

ReactDOM.render(templateTwo, appRoot);
