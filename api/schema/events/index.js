const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLList,
        GraphQLID, GraphQLScalarType, GraphQLInt, GraphQLBoolean, GraphQLInputObjectType} = graphql;

const ContactInfoType = new GraphQLObjectType({
    name: 'ContactInfoType',
    fields: ()=>({
        phoneNumber: { type: GraphQLInt },
        web: { type: GraphQLString },
        email: { type: GraphQLString },
    })
});

const GeometryType = new GraphQLObjectType({
    name: 'GeometryType',
    fields: ()=>({
        lat: {type: GraphQLInt},
        lan: {type: GraphQLInt}
    })
});

const ContactInfoInput = new GraphQLInputObjectType({
    name: 'ContactInfoInput',
    fields: {
        phoneNumber: { type: GraphQLInt },
        web: { type: GraphQLString },
        email: { type: GraphQLString }
    }
});

const GeometryInput = new GraphQLInputObjectType({
    name: 'GeometryInput',
    fields: {
        lat: {type: GraphQLInt},
        lan: {type: GraphQLInt}
    }
});

const EventType = new GraphQLObjectType({
    name: 'EventType',
    fields: ()=>({
        eventName: { type: GraphQLString },
        date: {type: GraphQLString},
        fee: {type: GraphQLInt},
        contactInfo: {type: ContactInfoType},
        geometry: {type: GeometryType},
        timeFrom: {type: GraphQLInt},
        timeTo: {type: GraphQLInt},
        numberOfAttendees: {type: GraphQLInt},
        host: {type: GraphQLString},
        description: {type: GraphQLString},
        category: {type: GraphQLList(GraphQLString)},
        industry: {type: GraphQLList(GraphQLString)},
        deactivate: {type:GraphQLBoolean},
        
    })
});

const EventInput = { 
    id: {type: GraphQLID},
    eventName: { type: GraphQLString },
    date: {type: GraphQLString},
    fee: {type: GraphQLInt},
    contactInfo: {type: ContactInfoInput},
    geometry: {type: GeometryInput},
    timeFrom: {type: GraphQLInt},
    timeTo: {type: GraphQLInt},
    numberOfAttendees: {type: GraphQLInt},
    host: {type: GraphQLString},
    description: {type: GraphQLString},
    category: {type: GraphQLList(GraphQLString)},
    industry: {type: GraphQLList(GraphQLString)},
    deactivate: {type:GraphQLBoolean}
};

const listIds = {
    ids: GraphQLList(GraphQLID)
}

module.exports = {ContactInfoType, GeometryType, ContactInfoInput, GeometryInput, EventType, EventInput, listIds}
