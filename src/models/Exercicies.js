import mongoose from "mongoose";
import { workoutSchema } from "./Workout.js";

const exercicietSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    exercicieName: { type: String, required: true },
    series: { type: Number, required: true },
    maxRepetition: { type: Number, required: true },
    minRepetition: { type: Number, required: true },
    observation: { type: String },
    workoutId: { type: mongoose.Schema.Types.ObjectId, ref: "autores", required: true },
    workouts: workoutSchema
}, { versionKey: false })

const exercicies = mongoose.model("exercicies", exercicietSchema)

export default exercicies