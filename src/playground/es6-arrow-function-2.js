//arguments object - no longer bound with arrow functions

const add = function (a, b) {
    console.log(arguments); //o objeto arguments lista todos os argumentos passados para a função, indenpendente do número de parâmetros pré-definidos.
    return a + b;
};
console.log(add(300, 100));


const addArrow = (a, b) => {
    //console.log(arguments); << Em Arrow functions este objeto não está mais disponível.
    return a + b;
};
console.log(add(300, 100));

//this keyword - no longer bound

const user = {
    name: 'Vinicius',
    cities: ['Rio de Janeiro', 'Sao Paulo', 'Curitiba'],
    printPlacesLived: function () {
        console.log(this.name);
        console.log(this.cities);

        this.cities.forEach(function (){
            console.log(this.name + 'has lived in' + city); 
        });
    }
};
user.printPlacesLived();