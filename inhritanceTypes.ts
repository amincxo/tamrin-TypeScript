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

let userEvent : UserEvent = {
    name: "amin",
    dateCreated: new Date(),
    type: EventType.SPORT,
    UserID: 132
}