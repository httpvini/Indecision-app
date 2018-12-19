const appRoot = document.getElementById('App');

const renderApp = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button>Show details</button>
        </div>
    );
    ReactDOM.render(template, appRoot);
}
renderApp();

