console.log("App js is running");
//JSX - JavaScript XML


const appRoot = document.getElementById('App');

const app = {
    title: 'Incecision App',
    subtitle: 'Info',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    
    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
}

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p>{app.options.length}</p>
            <ul>
                <li>Alfred</li>
                <li>Bruce</li>
                <li>Barbara</li>
            </ul>
            <form onSubmit={onFormSubmit}>
                <input type='text' name='option' />
                <button>Add option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

renderApp();