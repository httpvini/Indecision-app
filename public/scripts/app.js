'use strict';

var appRoot = document.getElementById('App');

var renderApp = function renderApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            null,
            'Show details'
        )
    );
    ReactDOM.render(template, appRoot);
};
renderApp();
