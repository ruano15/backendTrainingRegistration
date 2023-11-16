import {workout} from "../models/Workout.js"

class WorkoutController{

    static async workoutListen (req, res) {
        try{
            const listenWorkout = await workout.find({})
            res.status(200).json(listenWorkout)
        }catch (erro){
            res.status(500).json({ message: `${erro.message} - Falha na requisição` })
        }
    }


    static async workoutListenId (req, res) {
        const workoutId = req.params.id
        try{
            const listenWorkout = await workout.findById(workoutId)
            res.status(200).json(listenWorkout)
        }catch (erro){
            res.status(500).json({ message: `${erro.message} - Falha na requisição` })
        }
    }


    static async workoutCreate (req, res) {
        const workoutMap = req.body
        try{
            const createWorkout = await workout.create(workoutMap)
            res.status(201).json({ message: `Workout create sucefull`})
        }catch (erro){
            res.status(500).json({ message: `${erro.message} - Falha na requisição` })
        }
    }


    static async workoutUpdate (req, res) {
        const workoutId = await workout.findById(req.params.id)
        const workoutMap = req.body
        try{
            const updateWorkout = await workout.findOneAndUpdate(workoutId, workoutMap)
            res.status(201).json({ message: `Workout update sucefull`})
        }catch (erro){
            res.status(500).json({ message: `${erro.message} - Falha na requisição` })
        }
    }


    static async workoutDelete (req, res) {
        const workoutId = await workout.findById(req.params.id)
        try{
            const deleteWorkout = await workout.findOneAndDelete(workoutId)
            res.status(201).json({ message: `Workout delete sucefull`})
        }catch (erro){
            res.status(500).json({ message: `${erro.message} - Falha na requisição` })
        }
    }
}

export default WorkoutController