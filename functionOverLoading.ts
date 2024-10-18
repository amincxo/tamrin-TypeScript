interface User {
    id:number , 
    fullName:string,
    age:number
}

const users: User[] =[
    {
        id:1,
        fullName: "aadddsdf",
        age: 14
    },
    {
        id:2,
        fullName: "aasddf",
        age: 27
    },
    {
        id:3,
        fullName: "aasssdf",
        age: 18
    },
    {
        id:4,
        fullName: "aaaaasdf",
        age: 25
    }    

]


function getUser (id:number): User | undefined;
function getUser (name:string): User | undefined;
function getUser (arg): User | undefined{
    if (typeof arg =="number") {
        return  users.find(user => user.id == arg)
    } else {
        return users.find(user => user.fullName == arg)
    }
};

console.log(getUser(6) ?? "User Not Found!")
console.log(getUser("aaaaasdf") ?? "User Not Found!")

console.log("section2")

// search by age and id and full name 
// can we add method easy and value easy
function getUserss(itemsSerch:object) : User | string | undefined {
    let [KeySearch] = Object.keys(itemsSerch)
    let [valueSearch] = Object.values(itemsSerch);
    // console.log(KeySearch)
    // console.log(valueSearch)
    switch (KeySearch) {
        case "id":
            return users.find(user=> user.id === +valueSearch )
            break;
        case "age":
            return users.find(user=> user.age === +valueSearch )
            break;
        case "fullName":
            return users.find(user=> user.fullName === valueSearch )
            break;
        default:
            return "Query Type Error";
            break;
    }
    return 
}

const valueSearch : object = {
    fullName : "ddsdf"
}

getUserss(valueSearch)
console.log(getUserss(valueSearch) ?? "User Not Found!")

// function getUserById(id:number):User | undefined {
//     return users.find(user => user.id == id)
// }

// function getUserByName(name:string):User | undefined {
//     return users.find(user => user.fullName == name)
// }