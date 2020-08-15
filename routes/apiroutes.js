const express = require("express");
const app = express();
const db = require("../models");
const {
    Workout
} = require("../models");

module.exports = function (app) {

    app.post("/api/workouts", ({
        body
    }, res) => {
        Workout.create(body)
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(400).json(err)
            })
    })
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(400).json(err)
            });
    });
    app.post("/api/workouts", ({
        body
    }, res) => {
        db.Workout.insertMany(body)
            .then(({
                _id
            }) => db.Workout.findOneAndUpdate({}, {
                $push: {
                    workout: _id
                }
            }, {
                new: true
            }))
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });
    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.insertMany(req.params.id)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        })
    })
    app.post("/api/stats", ({
        body
    }, res) => {
        db.Workout.insertMany(body)
            .then(({
                _id
            }) => db.Workout.findOneAndUpdate({}, {
                $push: {
                    workout: _id
                }
            }, {
                new: true
            }))
            .then(dbStats => {
                res.json(dbStats);
            })
            .catch(err => {
                res.json(err);
            });
    });
    app.get("/api/stats", (req, res) => {
        db.Workout.find({})
            .then(dbStats => {
                res.json(dbStats);
            })
            .catch(err => {
                res.status(400).json(err)
            });
    });
    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
            .then(dbStats => {
                res.json(dbStats);
            })
            .catch(err => {
                res.status(400).json(err)
            });
    });





}