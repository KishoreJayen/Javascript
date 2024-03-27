
function add (a,b){
    let c = a+b;
    return c
}

const sub =(a,b) =>{
    let c= a-b;
    return c;
}

const div =() =>{
    let a= prompt("Enter A")
    let b= prompt("Enter B")
    let c = parseInt(a) / parseInt(b)
    return c

}

let addRes = add(7,8)
let subRes = sub(21,6)
let divRes = div(36,6)

console.log (`Add 7+8=${addRes}
        Sub 21-6=${subRes}
        Div 36/6=${divRes}`);