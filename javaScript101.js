function hello(name) {
    console.log(`Hello ${name}!`);
}
hello('Mustache')

function hello(name) {
    if (name) {
        msg = `Hello ${name}!`
    } else {
        msg = `Hello World!`
    }
    console.log(msg)
}    
hello("Mustache")
hello()


function madlib(name, subject) {
    msg = `${name}'s favorite subject in school is ${subject}.`
    return msg
}

console.log(madlib("Anushka", "art"))


function tipAmount(billAmount, serviceLevel) {
    
    if (serviceLevel === "good") {
        let tip = billAmount * .2
        console.log(tip)
    } else if (serviceLevel === "fair") {
        let tip = billAmount * .15
        console.log(tip)
    } else if (serviceLevel === "poor") {
        let tip = billAmount * .1
        console.log(tip)
    }
}
tipAmount(100, "good")

function totalAmount(billAmount, serviceLevel) {
    if (serviceLevel === "good") {
        let total = billAmount * .2 + billAmount
        console.log(total)
    } else if (serviceLevel === "fair") {
        let total = billAmount * .15 + billAmount
        console.log(total)
    } else if (serviceLevel === "poor") {
        let tip = billAmount * .1 + billAmount
        console.log(total)
    }
}
totalAmount(100, "good")

function splitAmount(billAmount, serviceLevel, numberOfPeople) {
    if (serviceLevel === "good") {
        let total = billAmount * .2 + billAmount
        let perPerson = total / numberOfPeople
        console.log(perPerson)
    } else if (serviceLevel === "fair") {
        let total = billAmount * .15 + billAmount
        let perPerson = total / numberOfPeople
        console.log(perPerson)
        
    } else if (serviceLevel === "poor") {
        let tip = billAmount * .1 + billAmount
        let perPerson = total / numberOfPeople
        console.log(perPerson)
        
    }
}
splitAmount(100, "good", 5)