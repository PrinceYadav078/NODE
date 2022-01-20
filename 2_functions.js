// normal funtion

// function sayhi(){   // declaration
//     console.log('funtion said  hi')
// }

// sayhi() //function invokation


// function add(a,b){
//     console.log('the addition is', a+b)
// }

// add(2,3)

// function mul(a,b){
//     console.log(a*b)
// }
// mul(2,3)

// funtion as first class citizens

let sayhi= function(){ // ANONYMOUS FUNCTIONS
    console.log('hi') // in JS you csn assign a funtion to a variable and can call it
}

sayhi() // we are calling this later whenever we want to


// IIFE (Immediately invoked function Expression)


let sub=(function(a,b){
    return a-b;
})(20,10)

console.log(sub)