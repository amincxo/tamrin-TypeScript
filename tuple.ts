let user : [name:string , age:number];
user = ['erfan yousefi' , 25]
let position : [lat:number , long:number] = [52.545664 , -6.15456];
let [lat , long] = position;
position.push(56+564)
console.log(lat,long) 

console.log(position);

let book:[name : string ,  author: string , pages: number, publishCount?: number , ];

book = [
    "amin",
    "how toamin",
    54
]

const [naam , nevisnadeh , safehat] = book

let userScore: [username:string , ...scores:[first:number , second : number , third: number] ]