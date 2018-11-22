'use strict';

//arguments object - no longer bound with arrow functions

var add = function add(a, b) {
    console.log(arguments); //o objeto arguments lista todos os argumentos passados para a função, indenpendente do número de parâmetros pré-definidos.
    return a + b;
};
//console.log(add(300, 100));


var addArrow = function addArrow(a, b) {
    //console.log(arguments); << Em Arrow functions este objeto não está mais disponível.
    return a + b;
};
//console.log(add(300, 100));

//this keyword - no longer bound

var user = {
    name: 'Vinicius',
    cities: ['Rio de Janeiro', 'Sao Paulo', 'Curitiba'],
    printPlacesLived: function printPlacesLived() {
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

var userArrow = {
    name: 'Vinicius',
    cities: ['Rio de Janeiro', 'Sao Paulo', 'Curitiba'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        //sintaxe de método es6
        this.cities.forEach(function (city) {
            //usa o "this" do contexto em que foi criado. 
            console.log(_this.name + ' has lived in ' + city);
        });
    }
};
//userArrow.printPlacesLived();

var userMap = {
    name: 'Vinicius',
    cities: ['Rio de Janeiro', 'Sao Paulo', 'Curitiba'],
    printPlacesLived: function printPlacesLived() {
        var _this2 = this;

        return this.cities.map(function (city) {
            return _this2.name + ' has lived in ' + city;
        }); //map, além de permitir fazer algo com cada item de um array, cria um novo array a partir das transformações possíveis com cada item do array varrido.    
    }
};
console.log(userMap.printPlacesLived());

//challenge area
var multiplier = {
    numbers: [2, 5, 7],
    multiplyBy: 3,
    multiply: function multiply() {
        var _this3 = this;

        //sintaxe es6
        return this.numbers.map(function (number) {
            return number * _this3.multiplyBy;
        }); //retorna array com valor de cada index multiplicado.
    }
};
console.log(multiplier.multiply());
