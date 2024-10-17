enum Steps {
    zero,
    one,
    two,
    three 
}

console.log(Steps.one)
console.log(Steps.zero)



enum USER_PAYMENT_STATUS {
    PENDING="pending",
    TRY_TO_CASH ="tryToCash",
    FAILED="failed",
    SUCCESS = "success",
    WARNING="warning",
    ERROR="error",
    INFO="info"
}

enum USER_ACTIVE_STATE {
    TRUE=1,
    FALSE=0,
}


let user1:object = {
    name: "",
    age: 24,
    state: 0,
    isActive:!!USER_ACTIVE_STATE.FALSE
}

enum ERROR_MESSAGES {
    VALIDATION = "error for validation",
    NOT_FOUND = "error for validation",
    SERVER_ERROR = "error for internal server error",
    UNAUTHORIZATION = "error for unauthorization"
}

enum StatusCodes {
    OK = 200,
    CREATED= 201,
    ACCEPTED=202,
    NOTFOUND=404,
    BAD_REQUEST=400,
    UNAUTHORIZATION = 401,
    
}

console.log(ERROR_MESSAGES.UNAUTHORIZATION)