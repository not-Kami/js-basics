let name = 'Salim';
let age = 36;
let Pi = 3.14159;

let isAdult = true;

let user = {
    name: 'Salim',
    age: 36,
    isActive : true,
    hobbies : ['Gaming', 'Coding', 'Coding']
};

function testScope (){
    let variableInterne = 'Je suis dans la fonction testScope'; 
    console.log(variableInterne);
    let userInterne = user;
    return variableInterne, userInterne;
}

testScope();
console.log(testScope);