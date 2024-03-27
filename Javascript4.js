// let name = prompt("What is your Name?")
// console.log('Heyyyy' )

let str="I am Kishore"
let strr1=" and being professional developer"
console.log(str.concat(strr1))



var name="Kishore Jayen"
var education="B.com IT"
var address="Tiruppur."

console.log(`${name} completed ${education} now lives in ${address} `)

let strr3=`He is an Hero and
"He is an Villan"
 Life is very short Namba
 Always be Happy...!!
      -By Krish*`
console.log(`${strr3}`)

let array2=["Kishore", "Jayen", "Harish", "Bindhu"]
console.log(array2.reverse());




let array= ['a','b','c','d','e'];
console.log(array)
array.push("Kishore Jayen") //Add the element in the end of the array
console.log(array)

console.log(array.pop()) //Remove the last element in the array
console.log(array)

console.log(array.shift()) //Remove the first element in the array
console.log(array)

console.log(array.unshift('h')) //Add the element in the Beginning of the array
console.log(array)

console.log(array.splice(3,1,"Krish")) //0 not delete just insert 1 delete and replace from the array
console.log(array)

array.reverse()
console.log(array)

let str4= array.join() //Convert Arrays to String
console.log(str4)

let str5= str4.split(',') //Convert String to Array
console.log(str5)


let str1="Kishore is an web developer"
let str2="Kishore is an web developer and Kishore is an model"
let str3='    My name is Mark Antony   '
console.log(str1.slice(11))
console.log(str1.slice(14,17))
console.log(str1)
console.log(str1.replace('Kishore','Harish'))
console.log(str2.replaceAll('Kishore','Harish'))
console.log(str1.toUpperCase())
console.log(str1.toLowerCase())
console.log(str3.trim())
console.log(str1.includes("developer"))
console.log(str1.includes("eb")) ///It contains any letter including the given str => "TRUE"

//Arrow Function
let arr=[10,20,30,40,50]
res=0
array.forEach((value,i)=>{
  res += value;
})

console.log(arr)

//ES6
// res=0
// for(let value of arr){
//       res += value;
// }   


