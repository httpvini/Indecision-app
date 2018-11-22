'use strict';

console.log("App js is running");
//JSX - JavaScript XML

var app = {
    title: 'Incecision App',
    subtitle: 'Info',
    options: ['one', 'two']
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options' : 'No options'
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

var count = 0;
var addOne = function addOne() {
    console.log('addOne');
};

var minusOne = function minusOne() {
    console.log('minusOne');
};

var reset = function reset() {
    console.log('reset');
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Count: ',
        count
    ),
    React.createElement(
        'button',
        { onClick: addOne },
        '+1'
    ),
    ' //alguns atributos do html tiveram seus nomes modificados, devido a palavras reservadas do js. verificar doc do react.',
    React.createElement(
        'button',
        { onClick: minusOne },
        '-1'
    ),
    React.createElement(
        'button',
        { onClick: reset },
        'reset'
    )
);
console.log(templateTwo);
var appRoot = document.getElementById('App');
ReactDOM.render(templateTwo, appRoot);
