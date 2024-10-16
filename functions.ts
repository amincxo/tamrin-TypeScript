
function sum (num1:number,num2:number): number {
    return num1 + num2
}

console.log(sum(4,4.5)) 

const getName = (firstName : string , lastName : string):string => {
    return `Hello ${firstName } - ${lastName}`
}

const getDate = ():Date => {
    return new Date()
}

console.log(getName('hos' , "azn"));

console.log(getDate())

let qwerqwe: any="asdf";

qwerqwe = 234

function logger(value:any):void {
    console.log(value) 
}

function runfunction(fn:Function):Function {
    return fn()
}