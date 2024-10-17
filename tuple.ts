let user3 : [name:string , age:number];
user3 = ['erfan yousefi' , 25]
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



let userScore: [username:string , ...scores:[first:number , second : number , third: number] ]

let myScore: [name:string , ...nums:number[]]

userScore=[ "amincxo" , 10,20,30]

myScore = ["name " ,10,20,30,40,50,60,40,50,20,250,50,250,20,20 ]
