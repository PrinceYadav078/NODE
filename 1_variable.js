// var a; // variable will be initialized with undefined
// console.log(a)

// // JS is a dynamically typed language datatype

// var a=3
// console.log(a)

// a="I am String"
// console.log(a)

// a=true
// console.log(a)

// a=null
// console.log(a)

// //data types in javascript- Number, string, boolean

// var b=2.3 // as anumber
// var c='d'


var flag=true

var num=15

for(var i=2;i*i<=num;i++){
    if(num%i==0){
        flag=false
        break
    }
}

if(flag){
    console.log('number is prime')
}
else{
    console.log('number is not prime')
}