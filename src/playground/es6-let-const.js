var nameVar = 'Vinicius';
var nameVar = 'Mike'; //possible to redefine
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie'; // Possible to reassign but not possible to redefine. 
console.log('nameLet', nameLet);


const nameConst = 'Jen'; // Not possible to reassign and redefine
console.log('nameLet', nameLet);

//scope - all these variables are only accessible inside theirs function.
// let e const têm escopo de bloco, se forem declaradas dentro de um for, só poderão ser acessadas dentro daquele bloco.
//var tem escopo de função, independente do bloco, você consegue acessá-lo
function getPetName1(){
    var petName = 'Joe';
    return petName;
}

function getPetName2(){
    let petName = 'Hal';
    return petName;
}

function getPetName3(){
    const petName = 'Bob';
    return petName;
}

const petName = getPetName2();
console.log(petName);


var fullName = 'Vinicius Oliveira';
let middleName;

if(fullName){
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
    middleName = 'Souza'
}

if(fullName){
    let lastName = fullName.split(' ')[1];
    console.log(lastName);
}

console.log(firstName);
console.log(middleName);
//console.log(lastName); << ERROR - lastName is not defined
