// in JS objects are basically key value pair

// to declare an obj

// let object={} // object declaration

// let person={
//     name: 'Prince Yadav' ,// name is the key and String(prince yadav) is the value
//     age: 21,
//     Mob:8077046718
    
// }
// console.log(person)

let cap={
    firstname:'Steve',
    lastname:'Rogers',
    age:102,
    isAvenger:true,
    friends:['Bucky','Tony','BlackWidow','Dr.Banner'],
    address:{
        state:'Manhattan',
        city:'New York'
    },

    sayHi: function fn(){
        console.log('Captain Says Hii')
    }
}

// console.log(cap)


// console.log(cap.firstname) // DOT NOTATION // access a property of an object
// console.log(cap['firstname']) //BRACKET NOTATION
// console.log(cap.lastname)
// console.log(cap.age)
// console.log(cap.friends[2]) // accessing elements from array
// console.log(cap.address.state) // accesing elements from object of object 
// cap.sayHi()

//Loop-> for in loop

// for( let key in cap){
//     console.log("key : ", key, " value ",cap[key] )
// }

cap.isAvenger=false  // update a property of an object


cap.movies=['Age of ultron','the winter soldier'] // add new property to an object

delete cap.age // delete a property

console.log(cap)

