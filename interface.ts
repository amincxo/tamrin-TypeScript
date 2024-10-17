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

console.log(newUser(personData));

interface INewBlog {
    title:string
    text:string
    image:string
    likes: number
    createdAt?:Date
}




let blug : INewBlog ={
    title:'',
    text:"",
    image: "",
    likes:0 ,
    createdAt: new Date()
}
//nulish oprator
function creteNewBlog(blog:INewBlog):INewBlog {
    blog.createdAt = blog.createdAt ?? new Date();
    return blog
}

console.log(creteNewBlog(blug)) 