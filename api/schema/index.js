const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLList,
        GraphQLID, GraphQLScalarType, GraphQLInt, GraphQLBoolean, GraphQLInputObjectType} = graphql;

const eventMutation = require('./events/mutation');
const eventQueries = require('./events/query');

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createEvents: eventMutation.createEvents,
        updateEvent: eventMutation.updateEvent,
        deleteEvent: eventMutation.deleteEvent,
        deActivateEvents: eventMutation.deActivateEvents
    }
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        getAllevents: eventQueries.getAllEvents,
        getEvent: eventQueries.getEvent,
        searchEvents: eventQueries.searchEvents,
        searchOREvents: eventQueries.searchOREvents,
        filterOnDate: eventQueries.filterOnDate,
        upComingEvents: eventQueries.upComingEvents,
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});

