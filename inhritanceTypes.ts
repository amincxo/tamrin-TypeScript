enum EventType {
    SPORT="sport",
    FRINDLY="frindly"
}
type ID = string | number

type Events = {
    name :string;
    dateCreated:Date;
    type: EventType
}

type UserEvent = Events & {
    UserID:ID
}

interface UserEvent2 extends Events {
    UserID:ID
}

let userEvent : UserEvent2 = {
    name: "amin",
    dateCreated: new Date(),
    type: EventType.SPORT,
    UserID: 132
}

// ham interface ha az type ha va ham type ha az interface ha erth bari mikonan