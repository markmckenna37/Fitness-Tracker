const path = require("path");
const db = require("../models")

module.exports = function (app) {
    app.get("/exercise", (req, res) => {
        db.Workout.find({}, (err, data) => {
            if (err) {
                console.log(err);
            } else {
                res.json(data);
            }
        })
    })
    app.get("/stats", (req, res) => {
        db.Workout.find({}, (err, data) => {
            if (err) {
                console.log(err);
            } else {
                res.json(data);
            }
        })
    })



}