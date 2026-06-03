const express = require("express");
const app = express();
const ExpressError = require("./ExpressError.js");

// app.use((req, res, next) => {
//     console.log("1st middleware");
//     next();
// });

// app.use((req, res, next) => {
//     console.log("2nd middleware");
//     next();
// });

// app.use((req, res, next) => {
//     req.time = new  Date(Date.now());
//     console.log(req.method, req.hostname, req.path, req.time);
//     next();
// });


// app.use("/random", (req, res, next) => {
//     console.log("this middleware is used by random api");
//     next();
// });

// app.use("/api", (req, res, next) => {
//     let { token } = req.query;
//     if(token === "giveaccess"){
//         return next();
//     }
//     res.send("ACCESS DENEID!!");
// });

//or

const checkToken = ("/api", (req, res, next) => {
    let { token } = req.query;
    if(token === "giveaccess"){
        return next();
    }
    throw new ExpressError(401, "ACCESS DENEID!!");
});

app.get("/api", checkToken, (req, res) => {
    res.send("Data");
});

app.get('/' ,(req, res) => {
    res.send("hi, i am root");
});


app.get("/random", (req, res) => {
    res.send("random page");
});

app.get("/err", (req, res) => {
    abcd = abcd;
});

app.get("/admin", (req, res) => {
    throw new ExpressError(403, "Access to admin is Forbidden!");
});

app.use((err, req, res, next) => {
    let { status = 500, message = "Some random error" } = err;
    res.status(status).send(message);
});

// app.use((err, req, res, next) => {
//     console.log("------ Error2 ------");
//     next(err);
// });

// app.use((req, res) => {
//     res.send("Page not found!");
// });

app.listen(8080, () => {
    console.log("server is running at port 8080");
});