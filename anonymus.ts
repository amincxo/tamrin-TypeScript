// Anonymus Types 

let produnts : Array<{title : string , img:string , price:number , discount:number | undefined , count:number}>

let peyment : {productAmount : number , gateway : string};

let basket : {
     products:  Array<{title : string , img:string , price:number , discount:number | undefined , count:number}> ,
      peyment : {productAmount : number , gateway : string}
    }

basket ={
    products : [
        {
            title:"iphone 13 promax",
            img:"inmg.png",
            price: 52000 ,
            discount:5,
            count:500,
        }
    ],
    peyment : 
        {
            productAmount : 24700000,
            gateway: "zarrompal",
        }
    
}