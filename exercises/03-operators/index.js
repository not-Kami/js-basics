//Exercice 1


function calculate (a, b) {
  return {
    sum : a + b,
    sub : a - b,
    mul : a * b,
    div : a / b,
    mod : a % b,
  }
};

console.log(calculate(10, 5));

//Exercice 2
// ?????????????

//Exercice 3

function checkAge (age){
    if(age>=18 && age<=65){
        return true
    }
    return false
}

console.log(checkAge(18))
console.log(checkAge(35))
console.log(checkAge(17))

let Salim = {
    age : 36,
    hasValidEmail : true,
    isActive : true
}

function isValidUser (user){
    if (user.age>= 18 && user.hasValidEmail == true && user.isActive == true){
        return true
    }
    return false
}
console.log(Salim)
console.log(isValidUser(Salim))

//Exercice 4

function updateCounter(number){
    if (Number.isInteger(number)){
        return (++number)*2
    }
    return false
}

console.log(updateCounter(-10))
console.log(updateCounter(5))
console.log(updateCounter('a'))
console.log(updateCounter('2'))
console.log(updateCounter(true))


function calculateTotal (TableauDePrix){
    let total = 0
    for (let i = 0; i<TableauDePrix.length; ++i){
       TableauDePrix[i] = TableauDePrix[i] * 1.20;
       total = total + TableauDePrix[i]
    }
    return total
}

let price = [1,2,3]

console.log(calculateTotal(price))