const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

app.use(express.static(path.join(__dirname, "public/css")));
app.use(express.static(path.join(__dirname, "public/js")));

app.set("view engine", "ejs"); //express internally require ejs
app.set("views", path.join(__dirname, "views")); //look for view (EJS) files inside the 
                                                // views folder that is in the same directory as index.js

app.get("/", (req, res) =>{
    res.render("home"); // by defualt express look for views folder
                       // so we do not have to pass the path of views folder
});

app.get("/rolldice", (req, res) =>{
    let diceVal = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice", {diceVal});
});

app.get("/ig/:username", (req, res) =>{
    let { username } = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    if(data){
        res.render("insta", { data });
    } else {
        res.render("error");
    }
});
app.get(/.*/, (req, res) =>{
    res.send("404 page not found");
});

app.listen(port, () =>{
    console.log(`server is running at port ${port}`);
});