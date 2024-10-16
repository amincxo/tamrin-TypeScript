function getKeys (obj :object):string[] {
    const keys : Array<string> =Object.getOwnPropertyNames(obj)
    return keys
} 

const user = {
    name : "aminborvayeh",
    age : 24,
    skill: "fullstack"
}

let numbers : Array<number> = [1,2,3,4,5,6]
let numbers2 : number[] = [1,2,3,4,5,6]

console.log(getKeys(user));
console.log(numbers)