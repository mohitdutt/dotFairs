const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLList,
        GraphQLID, GraphQLScalarType, GraphQLInt, GraphQLBoolean, GraphQLInputObjectType} = graphql;

const eventGraphQLSchema = require('./index');
        
const EventSchema = require('../../models/events');

const createEvents = {
    type: eventGraphQLSchema.EventType,
    args: eventGraphQLSchema.EventInput,
    async resolve(parent, args){
        // const argsNew = JSON.parse(JSON.stringify(args));
        let event = new EventSchema({
            eventName: args.eventName,
            date: args.date,
            fee: args.fee,
            contactInfo: args.contactInfo, 
            geometry: args.geometry,
            timeFrom: args.timeFrom,
            timeTo: args.timeTo,
            numberOfAttendees: args.numberOfAttendees,
            host: args.host,
            description: args.description,
            category:  args.category,
            industry: args.industry,
            deactivate: args.deactivate
        })
        try {
            let result = await event.save();
            return result
        } catch (error) {
            throw error
        }
    }
}

const updateEvent = {
    type: eventGraphQLSchema.EventType,
    args: eventGraphQLSchema.EventInput,
    async resolve(parent, args){
        const filter = args.id;
        delete args.id;
        const update = args
        try {
            let result = await EventSchema.findByIdAndUpdate(filter, update)
            return result
        } catch (error) {
            throw error
        }
    }
}

const deleteEvent = {
    type: eventGraphQLSchema.EventType,
    args: {id: {type: GraphQLID}},
    async resolve(parent, args){
        try {
            let result = await EventSchema.findByIdAndRemove(args.id)
            return result
        } catch (error) {
            throw error
        }
    }
}

const deActivateEvents = {
    type: eventGraphQLSchema.EventType,
    args: {Ids: {type: GraphQLList(GraphQLID)}},
    async resolve(parent, args){
        try {
            let result = await EventSchema.updateMany(
                { _id: { $in: args.Ids } },
                { $set: { deactivate : true } },
                {multi: true}
             )
            return result
        } catch (error) {
            throw error
        }
    }
}

module.exports = {createEvents, updateEvent, deleteEvent, deActivateEvents}
