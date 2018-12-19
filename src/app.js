console.log("App js is running");
//JSX - JavaScript XML


const appRoot = document.getElementById('App');

const app = {
    title: 'Incecision App',
    subtitle: 'Info',
    options: [],
    listOption() { 
        return this.options.map((option) => <li key={option}>{option}</li>); //retorna array com valor de cada index em jsx.
    }
};

const onFormSubmit = (e) => {
    e.preventDefault(); //impede o refresh da página inteira, deixando essa function como handler do evento.
    const option = e.target.elements.option.value; //target aponta para o elemento html de onde vem o evento, no caso form. option é o name do elemento html.
    
    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
        console.log(app.options);
    }
}

const onClickRemoveAll = (e) => {
    e.preventDefault();
    app.options = [];
    renderApp();
    console.log(app.options);
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
}

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I Do?</button>
            <button onClick={onClickRemoveAll}>Remove All</button>
            <ul>
                {app.listOption()}                
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