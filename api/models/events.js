const mongoose = require('mongoose');
// const validator = require('validator');

const EventsSchema = new mongoose.Schema({
    eventName: {type: String},
    date: {type: Date},
    fee: {type: Number},
    contactInfo: {
        phoneNumber: {type: Number},
        web: {type: String},
        email: {type: String,
            trim: true,
            lowercase: true,
            unique: true,
            required: 'Email address is required',
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
    },
    geometry: {
        lat: {type: Number},
        lan: {type: Number}
    },
    timeFrom: {type: Number},
    timeTo: {type: Number},
    numberOfAttendees: {type: Number, default: 0},
    host: {type: String},
    description: {type: String},
    category: {type: Array},
    industry: {type: Array},
    deactivate: {type:Boolean, default: false},
        // cityId: {type: },
        // stateId: {type: },
        // countryId: {type: },
},{
    timestamps: true
});

const Events = mongoose.model('events', EventsSchema);
module.exports = Events