const express = require("express");
const noteRouter = express.Router();

// res is response jo milega ? (Both in get and post)
noteRouter.get("/", (req, res) => {
    res.send("notes get request")
});

// res is response jo milega ? (Both in get and post)
noteRouter.post("/", (req, res) => {
    res.send("noes post request")
});
module.exports = noteRouter;
// start from 6:36