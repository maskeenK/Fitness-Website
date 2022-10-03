var mongoose = require("mongoose");

    //Profile
//------------
var ProfileSchema = new mongoose.Schema({
    name: {
        first: {type: String, default: ""},
        last: {type: String, default: ""}
    },
    gender: String,
    dob: Date,
    height: {
        magnitude: {type: Number, default: 0},
        unit: {type: String, default: "cm"}
    },
    weight: {
        magnitude: {type: Number, default: 0},
        unit: {type: String, default: "kg"}
    },
    targetWeight: Number,
    weightHist: [
        {
            weight: {
                magnitude: {type: Number, default: 0},
                unit: {type: String, default: "kg"}
            },
            timestamp: Date
        }
    ]   
});

module.exports = mongoose.model("Profile", ProfileSchema);
