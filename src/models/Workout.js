import mongoose from "mongoose";

const workoutSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    workoutName: { type: String, required: true },
    workoutDay: { type: String, required: true },
}, { versionKey: false })

const workout = mongoose.model("worout", workoutSchema)

export {workout, workoutSchema}