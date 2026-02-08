const express = require("express");
const app = express();

app.get("/", (req, res) =>{
    res.send("home page");
});

app.get("/about", (req, res) =>{
    res.send("about page");
});

app.get("/:username/:id", (req, res) =>{
    let {username, id} = req.params;
    let htmlStr = `<h1>Welcome to the page of @${username}</h1>`;
    res.send(htmlStr);
});

app.get("/search", (req, res) =>{
    let { q } = req.query;
    if(!q) {
        res.send(`<h1>nothing saerch</h>`)
    };
    res.send(`<h1>Search querry is ${q}</h>`);
});

// not work in espress 5th version but work in 4th
// app.get('*', (req, res) =>{
//     res.send("404 page not found")
// });

app.get(/.*/, (req, res) =>{
    res.send("404 page not found");
});

app.listen(3000, () =>{
    console.log("app is listening on port 3000");
});