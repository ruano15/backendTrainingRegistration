import express from 'express'
import ExerciciesController from '../controllers/exerciciesController.js'

const routes = express.Router()
    routes.get("/exercicies", ExerciciesController.exerciciestListen)
    routes.get("/exercicies/search", ExerciciesController.exercicieListenByWorkout)
    routes.get("/exercicies/:id", ExerciciesController.exercicieListenId)
    routes.post("/exercicies", ExerciciesController.exercicieCreate)
    routes.put("/exercicies/:id", ExerciciesController.exercicieUpdate)
    routes.delete("/exercicies/:id", ExerciciesController.exercicieDelete)

export default routes