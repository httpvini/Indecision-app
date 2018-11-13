console.log("App js is running");
//JSX - JavaScript XML

var app = {
    title: 'Incecision App',
    subtitle: 'Info',
    options: ['one', 'two']
};
var template = (
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

var user = {
    name: 'Marcus',
    age: 26,
    location: 'Rio de Janeiro'
};
function getLocation(location){
    if(location){
        return <p>Location: {location}</p>
    } 
};
var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

var appRoot = document.getElementById('App');

ReactDOM.render(template, appRoot);