// Describe all the appication datatypes

type PackThings {
    id: Int!
    uid: String!
    name: String!
    needs: [PackThings]!
    things: [Things]!
}

type Things {
    id: Int!
    uid: String!
    name: String!
    settings: [Setting]
    states: [State]
}

type Setting {
    id: Int!
    uid: String!
    name 
}