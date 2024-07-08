
// stack (primitive_dataTypes) 

// Heap (Non_Primitive_dataTypes)

const myName = "Ali" ;
let anOtherName = myName ;
anOtherName = "Yahya" ;

console.log(myName)
console.log(anOtherName)

let  userOne = 
{

  Name : "Ali" ,
  email : "ali@gmail.com" ,
  Address : "59 Jaranwala" ,
}

let userTwo = 
{
  Name : "Yahya" ,
  email : "Yahya@gmail.com" ,
  Address : "Abdullahpur FSD" ,
}

userTwo = userOne ;

userOne.email = "abc@gmail.coom"

console.log (userOne)
console.log (userTwo)


