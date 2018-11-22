console.log("App js is running");
//JSX - JavaScript XML

const app = {
    title: 'Incecision App',
    subtitle: 'Info',
    options: ['one', 'two']
};
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ul>
            <li>Alfred</li>
            <li>Bruce</li>
        </ul>
    </div>
);

let count = 0;
const addOne = () => {
    console.log('addOne');
};

const minusOne = () => {
    console.log('minusOne');
};

const reset = () => {
    console.log('reset');
};

const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button> //alguns atributos do html tiveram seus nomes modificados, devido a palavras reservadas do js. verificar doc do react.
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>reset</button>
    </div>
);
console.log(templateTwo);
const appRoot = document.getElementById('App');
ReactDOM.render(templateTwo, appRoot);