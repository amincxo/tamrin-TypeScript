function sayHello(firstname:string , lastName?:string) :void {
    console.log( `Hi ${firstname || "New"} ${lastName || 'bi famil'} welcome to our website. `)
}

sayHello("amin" , 'brv');

let blog : {
    title:string,
    text:string,
    like: number,
    author: object ,
    comments?: Array<object>| object[]
}
blog ={
    title: "new title",
    text: "new text",
    like: 0,
    author: {
        name : "amin"
    },

}