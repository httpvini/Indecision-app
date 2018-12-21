'use strict';

var appRoot = document.getElementById('App');

var toggle = false;

var onToggle = function onToggle() {
    toggle = !toggle;
    renderApp();
};

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
            { onClick: onToggle },
            toggle ? 'Hide details' : 'Show details'
        ),
        toggle && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'Something'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};
renderApp();
