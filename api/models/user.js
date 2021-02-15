const mongoose = require('mongoose');
// const validator = require('validator');

const EventsSchema = new mongoose.Schema({
    name: {type: String},
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
    description: {type: String},
    category: {type: Array},
    industry: {type: Array},
    deactivate: {type:Boolean, default: false},
    eventList: {type: Array},
    userType: {type: Array},
        // cityId: {type: },
        // stateId: {type: },
        // countryId: {type: },
},{
    timestamps: true
});

const Events = mongoose.model('events', EventsSchema);
module.exports = Events