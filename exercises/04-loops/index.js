// Exercice 1
console.log('Exercice 1')
let tab = []

for (let i=1; i<=10; i++) {
    tab.push(i)
}

console.log(tab)
console.log()

let pair = []

for( let i=0; i<=20; i++){
    if(i%2 == 0){
        pair.push(i);
    }
}

console.log(pair)
console.log()

let resultat =0
let num = 0


function factorielle (num, facto){
    let buffer = 1
    for (let i=0; i<facto ; (++i, --num)){
        buffer = buffer * num
        num 
    }
    return buffer
}

console.log(factorielle(5,5));
console.log()
console.log('_________________________')
console.log()


// Exercice 2 
console.log('Exercice 2')

let countDown = 10
while (countDown>=0){
    console.log(countDown)
    --countDown
}
console.log()

let numberModulo=67

while((numberModulo%7) !=0){
    ++numberModulo
}
console.log(numberModulo)
console.log()


let SumNum = 21
let sum = 0
let digits = SumNum.toString().split('')

let i = 0
while (i < digits.length) {
    sum += parseInt(digits[i])
    i++
}
console.log(sum)

console.log()
console.log('_________________________')
console.log()
