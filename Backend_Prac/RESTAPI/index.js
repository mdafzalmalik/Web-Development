const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id: "1a",
        name: "afzal",
        content: "I love Coding!."
    },
    {
        id: "2a",
        name: "aman",
        content: "Hardwork is the key to succes."
    },
];

app.get("/posts", (req, res) => {
    res.render("index", {posts});
});

app.get("/posts/view/:id", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => p.id == id);
    res.render("view", {post});
});

app.listen(port, () => {
    console.log(`server is running at ${port}`);
});