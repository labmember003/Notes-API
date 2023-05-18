const express = require("express");
const app = express();
const userRouter = require("./routes/userRoutes");
const noteRouter = require("./routes/noteRoutes");
const mongoose = require("mongoose")

app.use(express.json());
// request ki body ko json mei convert krdega

// app.use((req, res, next) => {
//     console.log("HTTP METHOD - " + req.method + " URL - " + req.url);
//     next();
// });


app.use("/users", userRouter);
app.use("/notes", noteRouter);

// res is response jo milega ?
app.get("/", (req, res) => {
    res.send("Hello World");
})

mongoose.connect("mongodb+srv://avishisht:12345678a@cluster0.wiynpfy.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    app.listen(4000, () => {
        console.log("server runing on port 4000")
    });
})
.catch((error) => {
    console.log(error);
})