//Litral types

type EventName = "click" | "abort" | "change" | "load"

const docEvent : EventName = "click";

type productType = "phisical" | "virtual"
enum State {
    pending ,
    started ,
    cancel,
    abort,
    delivery,
}

let product : {
    type: productType ,
    state: State
} =  {
    type: "phisical" ,
    state: State.abort
}

console.log(product)