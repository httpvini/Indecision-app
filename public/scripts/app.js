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
                { key: option },
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

var numers = [65, 101, 1000];

var renderApp = function renderApp() {
    var template =
    // {
    //     [99, 98, 97] Ao colocar um array em uma expression para rendereizar no jsx, ele quebra cada elemento do array em uma expression individual 
    // }
    // {
    //     [<p key='1'>a</p>,<p key='2'>b</p>,<p key='3'>c</p>] o atributo key é necessário qnd trabalhamos com elementos html dentro de arrays. Funciona como o index para os elementos "repetidos". 
    // }
    // {
    //     numers.map((number) => {
    //         return <p key={number}>Number: {number}</p>;
    //     })
    // }
    React.createElement(
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
