import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import methodOverride from "method-override";
import { v4 as uuidv4 } from 'uuid';

const __filename = fileURLToPath(import.meta.url);  //Get the full path of the current file (index.js).
const __dirname = path.dirname(__filename);  //Get the folder where this file exists.

const app = express();
const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended:true}));

// method override
app.use(methodOverride("_method"));

let posts = [
    {
        id: uuidv4(),
        username: "afzal",
        content: "I love coding!"
    },
    {
        id: uuidv4(),
        username: "aman",
        content: "Hardwork is important to achieve success"
    },
];

app.get("/posts", (req, res) => {
    res.render("index", { posts });
});

app.get("/posts/new", (req, res) => {
    res.render("new");
});

app.post("/posts", (req, res) => {
    let id = uuidv4();
    let { username, content } = req.body;
    posts.push({ id, username, content });
    res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("show", { post });
});

app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit", { post });
});

app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id == p.id);
    post.content = newContent;
    res.redirect("/posts");
});

app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");
});

app.listen(port, () => {
    console.log(`server is running at port ${port}`);
});