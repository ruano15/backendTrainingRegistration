import exercicies from "../models/Exercicies.js"
import {workout} from "../models/Workout.js"

class ExerciciesController{
    
    static async exerciciestListen (req, res) {
        try{
            const listenExercicies = await exercicies.find({})
            res.status(200).json(listenExercicies)
        }catch (erro){
            res.status(500).json({ message: `${erro.message} - Falha na requisição` })
        }
    }


    static async exercicieListenId (req, res) {
        const exercicieId = req.params.id
        try{
            const listenExercicie = await exercicies.findById(exercicieId)
            res.status(200).json(listenExercicie)
        }catch (erro){
            res.status(500).json({ message: `${erro.message} - Falha na requisição` })
        }
    }


    static async exercicieCreate (req, res) {
        const workoutMap = req.body
        try{
            const setWorkout = await workout.findById(workoutMap.workoutId)
            const createExercicie = {...workoutMap, workouts:{...setWorkout._doc}}
            const insertExercicie = await exercicies.create(createExercicie)
            res.status(201).json({ message: `Exercicie create sucefull`})
        }catch (erro){
            res.status(500).json({ message: `${erro.message} - Falha na requisição` })
        }
    }


    static async exercicieUpdate (req, res) {
        const exercicieId = await exercicies.findById(req.params.id)
        const exercicieMap = req.body
        try{
            const updateExercicie = await exercicies.findOneAndUpdate(exercicieId, exercicieMap)
            res.status(201).json({ message: `Exercicie update sucefull`})
        }catch (erro){
            res.status(500).json({ message: `${erro.message} - Falha na requisição` })
        }
    }


    static async exercicieDelete (req, res) {
        const exercicieId = await exercicies.findById(req.params.id)
        try{
            const deleteExercicie = await exercicies.findOneAndDelete(exercicieId)
            res.status(201).json({ message: `Exercicie delete sucefull`})
        }catch (erro){
            res.status(500).json({ message: `${erro.message} - Falha na requisição` })
        }
    }

    static async exercicieListenByWorkout (req, res) {
        try{
            const parameter = req.query.workoutId
            const listenExercicie = await exercicies.find({workoutId: parameter})
            res.status(200).json(listenExercicie)
        }catch (erro){
            res.status(500).json({ message: `${erro.message} - Falha na requisição` })
        }
    }
}

export default ExerciciesController