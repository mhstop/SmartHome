// Describe all the appication datatypes


const typedefs = `

type Pack {
    id: Int!
    uid: String! // se.gt.pack.name.majeur.minor
    name: String!
    description: String
    needs: [Pack]
    things: [Thing]!
}

enum TypeThings {
    BREAKER
    LOAD
    CONTROLER
    SENSOR
}

type Thing {
    id: Int!
    uid: String! // se.gt.thing.name.majeur.minor
    name: String!
    description: String
    type: TypeThing! // should be an enum "Breaker, ..."
    settings: [Setting]
    states: [State]
}

type Setting {
    id: Int!
    uid: String!
    name: String!
    description: String
    val: 
    access: 


type Protocol {
    uid: String!
    name: String!
    description: String

}
type Topology {
    id: Int!
}

type Link {
    thing1: Thing!
    thing2: Things!
    typeLink: 
}

`
