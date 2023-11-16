import express from "express";
import workouts from "./workoutRoute.js"
import exercicies from "./exerciciesRoutes.js"


const routes = (app) => {
    app.get('/', (req, res) => {
        res.status(200).send("Backend Workout Online")
    })

    app.use(express.json(),
        workouts,
        exercicies
    )
}

export default routes