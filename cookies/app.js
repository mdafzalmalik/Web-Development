const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser("secretcode"));

app.get("/getcookies", (req, res) => {
    res.cookie("username", "afzal");
    res.send("cookie recieved");
})

app.get('/', (req, res) => {
    console.log(req.cookies);
    res.send("Hi, I am root");
});

app.get("/getsignedcookies", (req, res) => {
    res.cookie("country", "india", {signed: true});
    res.send("signed cookies send");
});

app.get("/verify", (req, res) => {
    console.log(req.signedCookies);
    res.send("verifying signed cookies");
});



app.listen(8080, () => {
    console.log("server is runing at port 8080");
});