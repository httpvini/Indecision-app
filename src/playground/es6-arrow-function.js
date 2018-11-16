
//Funções es5 são nomeáveis.
function squareFunc (x) {
    return x * x;
};

const square = function (x) {
    return x * x;
};

console.log(square(8));

//Arrow functions são sempre anônimas. 
//Se quiser se referir a uma arrow function posteriormente, deve-se obrigatoriamente atribuí-la a uma const
const squareArrow = (x) => {
    return x * x;
};

console.log(squareArrow(9));

//sintaxe para retorno de apenas uma expressão. 
const squareArrowExpression = (x) => x * x;

//arrow function verbosa
const getFirstName = (name) => {
    return name.split(' ')[0];
}
console.log(getFirstName('Marcus Vinicius'));

//arrow function expression syntaxe
const getFirstNameExpression = (name) => name.split(' ')[0];
console.log(getFirstNameExpression('Vinicius Oliveira'));