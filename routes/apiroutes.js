const express = require("express");
const app = express();
const db = require("../models")

module.exports = function (app) {
app.post("/api/exercise", ({body}, res) => {
    db.Workout.create(body)
      .then(({_id}) => db.Workout.findOneAndUpdate({}, { $push: { workout: _id } }, { new: true }))
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });
}