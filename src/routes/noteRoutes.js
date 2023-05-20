const express = require("express");
const { getNotes, createNote, deleteNote, updateNote } = require("../controllers/noteController");
const auth = require("../middlewares/auth");
const noteRouter = express.Router();

// res is response jo milega ? (Both in get and post)
noteRouter.get("/", auth, getNotes);
// auth ko saare arguements noteRouter provide krega
// auth ager return krdeta hai verna next call krdega that is getNotes in this case


// below 2 lines same as above line, auth return krdega tho krdega verna next call krdega
// noteRouter.get("/", auth)
// noteRouter.get("/", getNotes);

// res is response jo milega ? (Both in get and post)
noteRouter.post("/", auth, createNote);

noteRouter.delete("/:id", auth, deleteNote);

noteRouter.put("/:id", auth, updateNote);

module.exports = noteRouter;
// start from 6:36