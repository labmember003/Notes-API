const noteModel = require("../models/note");

const createNote = async (req, res) => {
    const {title, description} = req.body;

    const newNote = new noteModel({
        title: title,
        description: description,
        userId: req.usedId
    });
    try {
        await newNote.save();
        res.status(201).json(newNote);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }
}

const updateNote = (req, res) => {
    console.log(req.usedId);
}

const deleteNote = (req, res) => {
    console.log(req.usedId);
}

const getNotes = async (req, res) => {
    try {
        const notes = await noteModel.find({userId: req.usedId});
        res.status(200).json(notes);
    } catch {
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }
}
module.exports = {
    createNote,
    updateNote,
    deleteNote,
    getNotes
}