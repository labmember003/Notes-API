const express = require("express");
const app = express();
const userRouter = require("./routes/userRoutes");
const noteRouter = require("./routes/noteRoutes");
const mongoose = require("mongoose")

app.use(express.json());
// app. is equaivalent to Router
// app.post is equaivalent to router.post


// request ki body ko json mei convert krdega

// app.use((req, res, next) => {
//     console.log("HTTP METHOD - " + req.method + " URL - " + req.url);
//     next();
// });


// app.use sb pe chlta hai (get, post etc) path bhi consider krke obv
// middle ware is a funciton have req,res,next


app.use("/users", userRouter);
// first para -> string (optional), second mei do type ke ho skte middle ware ya fir Router, check krke accodringly kreega
// same cheez for app.get(), app.post() etc ke liye bhi hoti hai
// use aur baakiyo mei bs yeh farak hai ki use sab mei chlta ho, chahe koi bhi type ki request ho (get, post, etc)
app.use("/notes", noteRouter);

// res is response jo milega ?
app.get("/", (req, res) => {
    // middleware call he 3 paramenter ke saath hote hai first req, second res, third next (naam se kuch nhi hai, positional hai)
    res.send("Hello World");
})
app.post("/", (req, res) => {
    res.send("Hello World");
})
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
