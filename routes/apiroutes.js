//Establishing our modules
const express = require("express");
const app = express();
const db = require("../models");
const {
    Workout
} = require("../models");


//exporting all of the api routes
module.exports = function (app) {
    //post route for creating a new workout
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

    //get route for getting all workouts to post on the main page.
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(400).json(err)
            });
    });
    //Put route to push the new exercise to our database
    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.findByIdAndUpdate(req.params.id, {
                $push: {
                    exercises: req.body
                }
            })
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });

    //get route for our stats page
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