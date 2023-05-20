const jwt = require("jsonwebtoken");
const SECRET_KEY = "NOTESAPI";

const auth = (req, res, next) => {
    try {
        let token = req.headers.authorization;
        if (token) {
            token = token.split(" ")[1];
            let user = jwt.verify(token, SECRET_KEY);
            req.usedId = user.id;
            // aisa he hota hai, req.property = value
            // kuch proper class etc ka nhi hai
            // console.log("Cat");
            console.log(req.usedId);
        } else {
            res.status(401).json({
                message: "Unauthorized User"
            });
        }
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({
            message: "Unauthorized User"
        });
    }
}
module.exports = auth;