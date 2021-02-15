const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLList,
        GraphQLID, GraphQLScalarType, GraphQLInt, GraphQLBoolean, GraphQLInputObjectType} = graphql;

const eventGraphQLSchema = require('./index');
const EventSchema = require('../../models/events');

const getAllEvents = {
    type: new GraphQLList(eventGraphQLSchema.EventType),
    resolve(parent, args){
        return EventSchema.find({deactivate: false})
    }
}

const getEvent = {
    type: new GraphQLList(eventGraphQLSchema.EventType),
    args: eventGraphQLSchema.EventInput,
    async resolve(parent, args){
        try {
            // {"contactInfo.email": "mohitdutt@gmail.com"}
            let result = await EventSchema.find({$and: [{_id:args.id}, {deactivate: false}]})
            return result
        } catch (error) {
            throw error
        }
    }
}

const searchEvents = {
    type: new GraphQLList(eventGraphQLSchema.EventType),
    args: eventGraphQLSchema.EventInput,
    async resolve(parent, args){
        try {
            // {"contactInfo.email": "mohitdutt@gmail.com"}
            let result = await EventSchema.find({$and: [args, {deactivate: false}]})
            return result
        } catch (error) {
            throw error
        }
    }
}

const searchOREvents = {
    type: new GraphQLList(eventGraphQLSchema.EventType),
    args: eventGraphQLSchema.EventInput,
    async resolve(parent, args){
        const arrayToSearch = [];
        for(const arg in args){debugger
            let obj = {};
            obj[arg] = args[arg];
            arrayToSearch.push(obj);
        }
        try {
            let result = await EventSchema.find( { 
                // $or: arrayToSearch
                $and: [
                    { $or: arrayToSearch },
                    { $or: [{deactivate: false}] }
                ]
            })
            
            return result
        } catch (error) {
            throw error
        }
    }
}

const filterOnDate = {
    type: new GraphQLList(eventGraphQLSchema.EventType),
    args: {from: {type:GraphQLString}, to: {type:GraphQLString}},
    async resolve(parent, args){
        try {
            let result = await EventSchema.find({
                createdAt: {
                  $gte: new Date(args.from),
                  $lt: new Date(args.to)
                }
            })
            return result
        } catch (error) {
            throw error
        }
    }
}

const upComingEvents = {
    type: new GraphQLList(eventGraphQLSchema.EventType),
    args: {date: {type:GraphQLString}},
    async resolve(parent, args){
        try {
            let result = await EventSchema.find({
                createdAt: {
                  $gte: new Date(args.date)
                }
            }).limit(1)
            return result
        } catch (error) {
            throw error
        }
    }
}

module.exports = {getAllEvents, getEvent, searchEvents, searchOREvents, filterOnDate, upComingEvents}

