const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    type: {
        type: String,
        trim: true,
        required: "Is this workout a cardio or resistance workout?"
    },
    name: {
        type: String,
        trim: true,
        required: "Enter a name for this workout"
    },
    duration: {
        type: Number,
        required: "Enter a duration or your workout"
    },
    weight: {
        type: Number,
    },
    reps: {
        type: Number,
    },
    sets: {
        type: Number,
    }

})

const Workout = mongoose.model("Workout", ExerciseSchema)

module.exports = Workout;