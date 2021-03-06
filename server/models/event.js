//EVENT DATA BASE FOR EACH VENUE (SIDE BAR LIST)
const mongoose = require("mongoose");

console.log("loading Event schema");

// define the User model schema
const EventSchema = new mongoose.Schema({
    venue: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Venue"
    },
    headliner: String,
    supportOne: String,
    supportTwo: String,
    supportThree: String,
    date: Date,
    time: Number,
    headlinerAllotment: Number,
    supportOneAllotment: Number,
    supportTwoAllotment: Number,
    supportThreeAllotment: Number,
    totalGuestOnList: Number,
    totalGuest:Number,
    totalChecked: Number,
    guests: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Guest"
        },
    ],
    
});

module.exports = mongoose.model("Event", EventSchema);
