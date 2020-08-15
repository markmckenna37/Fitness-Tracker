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

    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.findByIdAndUpdate(req.params.id, { $push: {exercises: req.body}})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
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