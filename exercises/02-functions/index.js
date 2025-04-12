//Execice 1

function greet (name) {
    console.log('hello '+ name)
}
greet('Salim')

function calculateArea (width, height) {
    return width * height;
}
console.log(calculateArea(5, 10)); 

function isEven (number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(4)); 
console.log(isEven(5));


//Execice 2

function createUser (name, age, isActive) {
    this.name = name;
    this.age = age || 18;
    this.isActive = isActive || true;

    return this
}
let user = new createUser('Salim', 36, true);
console.log(user);

//Execice 3

var globalVar = 'Global';
function testScope() {
    var localVar = 'Local';
    console.log(globalVar);
    console.log(localVar);
}
testScope();


//Execice 4

function add(a, b){
    return a + b;
}
console.log(add(4,5));

function multiply(a, b){
    return a * b;
}   
console.log(multiply(4,5))
function getFullName (firstName, lastName){
    return firstName + ' ' + lastName;
}

console.log(getFullName('Salim', 'Siouda'));