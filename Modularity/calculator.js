function add(a,b){
    console.log("the sum is " , a+b)
}

function sub(a,b){
    console.log("the difference is " , a-b)
}

function mul(a,b){
    console.log("the product is ", a*b)
}

function div(a,b){
    console.log("the quotient is " , a/b)
}

module.exports={
    addition:add,
    substract:sub,
    multiply:mul,
    division:div,
}

//module.export is a object provided by Node.js by
// which tou can export your funtion in key value pair
// you will use your funtion with the keys you have assigned to them