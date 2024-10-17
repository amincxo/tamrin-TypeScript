const person :  {name :string , age : number} = {name: "amin", age:24 }



interface interfacePerson {
    firstname: string
    lastname: string
    age: number
    username: string 
    email: string
}

function newUser(person:interfacePerson){
    return person
}

let personData: interfacePerson = {
    firstname:"amin",
    lastname :"borvayeh",
    age: 20,
    username:"amincxo",
    email:"amincxo@gmail.com"
}

console.log(newUser(personData))