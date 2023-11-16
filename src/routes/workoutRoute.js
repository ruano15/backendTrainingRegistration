import express from "express"
import WorkoutController from "../controllers/workoutController.js"

const routes = express.Router()

routes.get("/workouts", WorkoutController.workoutListen)
routes.get("/workouts/:id", WorkoutController.workoutListenId)
routes.post("/workouts", WorkoutController.workoutCreate)
routes.put("/workouts/:id", WorkoutController.workoutUpdate)
routes.delete("/workouts/:id", WorkoutController.workoutDelete)


export default routes