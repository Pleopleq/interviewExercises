////////////////////
// Reverse String //
////////////////////

//Easy way, using .reverse()

function reverseStrOne(str){
    return str.split("")
           .reverse()
           .join("")
}

console.log("Using reverse :", reverseStrOne("Pleopleo"))

//Manual way using a for loop

function reverseStrTwo(str){

    let reversed = ""

    for(let character of str){
        reversed = character + reversed
        //console.log(reversed)
    }

    return reversed
}

console.log("Using a for loop :", reverseStrTwo("Felix Anducho"))
console.log("-------------------------------------------------- ")

/////////////////
// Palindrome  //
///////////////// 

function palindrome(str){
    let reversed = ""

    for(character of str){
        reversed = character + reversed
    }

    if(str === reversed){
        return true
    } else {
        return false
    }
}

console.log("Palindrome: ", palindrome("acca"))
console.log("Not a Palindrome: ", palindrome("asdfgh")) 

//Using .every() (It makes more comparations, not viable)

function palindromeWithEvery(str){
    return str.split("").every((char, i) => {
        return char == str[str.length - i - 1]
    })
}

console.log("Palindrome with .every(): ", palindromeWithEvery("abba"))
console.log("-------------------------------------------------- ")

///////////////////
// Int reversal  //
///////////////////

function reverseInt(n){
    let isNegative = Math.sign(n)
    const reversedInt = n.toString().split('').reverse().join('')
    
    if(isNegative === -1){
        return parseInt(reversedInt) * -1
    }

    return reversedInt
}

console.log(reverseInt(3892))
console.log(reverseInt(-233))

//Multiply by Math.sign()

function reverseIntMathSign(n){
    const reversedInt = n.toString().split("").reverse().join("")

    return parseInt(reversedInt) * Math.sign(n)
}

console.log("Multiply by Math.sign(): ", reverseIntMathSign(-34233))
console.log("Multiply by Math.sign(): ", reverseIntMathSign(91128))

// Not using Math.sign()

function reverseIntWithoutSign(n){
    const reversedInt = n.toString().split("").reverse().join("")
    if(n < 0){
        return parseInt(reversedInt) * -1
    }
    return parseInt(reversedInt)
}

console.log("Reverse Int without Math.sign(): ", reverseIntWithoutSign(-3531))
console.log("Reverse Int without Math.sign(): ", reverseIntWithoutSign(8121))
