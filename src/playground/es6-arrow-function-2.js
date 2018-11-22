//arguments object - no longer bound with arrow functions

const add = function (a, b) {
    console.log(arguments); //o objeto arguments lista todos os argumentos passados para a função, indenpendente do número de parâmetros pré-definidos.
    return a + b;
};
//console.log(add(300, 100));


const addArrow = (a, b) => {
    //console.log(arguments); << Em Arrow functions este objeto não está mais disponível.
    return a + b;
};
//console.log(add(300, 100));

//this keyword - no longer bound

const user = {
    name: 'Vinicius',
    cities: ['Rio de Janeiro', 'Sao Paulo', 'Curitiba'],
    printPlacesLived: function () {
        console.log(this.name);
        console.log(this.cities);
        //this.cities.forEach(function (){
        //    console.log(this.name + 'has lived in' + city); 
        //}); << Uncaught TypeError: Cannot read property 'name' of undefined << 
        //this.name é acessível dentro do objeto user, na function atribuída a
        //printPlacesLived, porém não é acessível na function anonima dentro do forEach.
    }
};
//user.printPlacesLived();

const userArrow = {
    name: 'Vinicius',
    cities: ['Rio de Janeiro', 'Sao Paulo', 'Curitiba'],
    printPlacesLived() { //sintaxe de método es6
        this.cities.forEach((city) => { //usa o "this" do contexto em que foi criado. 
            console.log(this.name + ' has lived in ' + city); 
        });
    }
};
//userArrow.printPlacesLived();

const userMap = {
    name: 'Vinicius',
    cities: ['Rio de Janeiro', 'Sao Paulo', 'Curitiba'],
    printPlacesLived() {
       return this.cities.map((city) => this.name + ' has lived in ' + city); //map, além de permitir fazer algo com cada item de um array, cria um novo array a partir das transformações possíveis com cada item do array varrido.    
    }
}
console.log(userMap.printPlacesLived());

//challenge area
const multiplier = {
    numbers:[2, 5, 7],
    multiplyBy: 3,
    multiply() { //sintaxe es6
        return this.numbers.map((number) => number * this.multiplyBy); //retorna array com valor de cada index multiplicado.
    }
}
console.log(multiplier.multiply());