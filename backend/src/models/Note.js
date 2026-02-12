import mongoose from "mongoose";

// create a schema
// model based off schema

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
}, { timestamps: true }); // createat, updateat

const Note = mongoose.model("Note", noteSchema)

export default Note