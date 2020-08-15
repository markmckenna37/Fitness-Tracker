const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [{
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
    }]
}, {
    toJSON: {
        virtuals: true
    }
})

ExerciseSchema.virtual("totalDuration").
get(function () {
    let totalDuration = 0;
    this.exercises.forEach(exercise => totalDuration += exercise.duration)
    return totalDuration;
});


const Workout = mongoose.model("Workout", ExerciseSchema)

module.exports = Workout;