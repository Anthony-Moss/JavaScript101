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

# set the service level to tip_pct 
service = service.lower()
if service == "good":
    tip = total * .2
    print('%.2f' % tip)
elif service == "fair":
    tip = total * .15
    print('%.2f' % tip)
elif service == "bad":
    tip = total * .1
    print('$%.2f would be the tip.' % tip)

#set total bill and divide among payers
total_bill = total + tip
people = float(input('How many people are paying? '))
amt_per = total_bill / people
print('$%.2f per person.' % amt_per)

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
