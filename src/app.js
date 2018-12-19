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

const numers = [65, 101, 1000];

const renderApp = () => {
    const template = (
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
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p>{app.options.length}</p>
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