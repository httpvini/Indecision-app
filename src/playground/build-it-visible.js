const appRoot = document.getElementById('App');

let toggle = false;

const onToggle = () => {
    toggle = !toggle;
    renderApp();
}

const renderApp = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onToggle}>{toggle? 'Hide details':'Show details'}</button>
            {toggle && (
                <div>
                    <p>Something</p>
                </div>
            )}
        </div>
    );
    ReactDOM.render(template, appRoot);
}
renderApp();

