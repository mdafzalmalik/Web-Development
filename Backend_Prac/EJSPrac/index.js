const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))

app.get("/", (req, res) =>{
    res.send("first page");
});

app.get("/home", (req, res) =>{
    res.render("home");
});

app.get("/account/:name", (req, res) =>{
    let { name } = req.params;
    res.render("account", {name});
});

app.get("/search", (req, res) =>{
    let { q } = req.query;
    res.render("search", { q }); 
});

app.get("/profile/:category", (req, res) =>{
    const { category } = req.params;
    const data = require("./data.json");
    const catData = data[category];
    res.render("profile", { catData });
});

app.listen(port, () =>{
    console.log(`server is running at port ${port}`);
});