//null , undefined , void

import { error } from "console"

let data1: undefined = undefined
let data2: null = null

console.log(typeof data1 , data1 , typeof data2 , data2)
console.log(!data1 , !data2)

let data3 :void = undefined

function checkType(): void {
    // console.log()
    // while(true){}
}

//any , unknown , never

let value:  any ;
value = "string"
value = 135
value =1.2
value = () =>{}
value = null
value = undefined
value = []
value = {}



let value1:  unknown ;
value1 = "string"  // copy nemishe vali any copy mishe be geyr az arrey ya obgect az any copy nemishe 
value1 = 135
value1 =1.2
value1 = () =>{}
value1 = null
value1 = undefined
value1 = []
value1 = {}



function sendError (): never {
    throw {error:"message" , code : 401 , status : false}
}
