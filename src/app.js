console.log("App js is running");
//JSX - JavaScript XML

var app = {
    title: 'Incecision App',
    subtitle: 'Info'
};

var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
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
var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);

var appRoot = document.getElementById('App');

ReactDOM.render(template, appRoot);