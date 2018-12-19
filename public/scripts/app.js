'use strict';

console.log("App js is running");
//JSX - JavaScript XML


var appRoot = document.getElementById('App');

var app = {
    title: 'Incecision App',
    subtitle: 'Info',
    options: [],
    listOption: function listOption() {
        return this.options.map(function (option) {
            return React.createElement(
                'li',
                null,
                option
            );
        }); //retorna array com valor de cada index em jsx.
    }
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault(); //impede o refresh da página inteira, deixando essa function como handler do evento.
    var option = e.target.elements.option.value; //target aponta para o elemento html de onde vem o evento, no caso form. option é o name do elemento html.

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
        console.log(app.options);
    }
};

var onClickRemoveAll = function onClickRemoveAll(e) {
    e.preventDefault();
    app.options = [];
    renderApp();
    console.log(app.options);
};

var renderApp = function renderApp() {
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
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'button',
            { onClick: onClickRemoveAll },
            'Remove All'
        ),
        React.createElement(
            'ul',
            null,
            app.listOption()
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add option'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

renderApp();
