type ID = number | string | null | {}
type BasketType = {
    product:ID[],
    discount?:string
}


type user = {
    full_name:string,
    password:string,
    age: number
    basket: BasketType
}

let userID : ID;

function getUser(userID: ID) :user {
    return {
        full_name: "aminborvayeh",
        password: "amincxo@gmail.com",
        age :54,
         basket : {
            product: [null, null ,5465,"asdfasd", {
                key:"value",
                }],
            discount:"asdfa"
        }

    }
}