const express = require("express");
const app = express();
const mysql = require("mysql2");
const path = require("path");
const methodOveride = require("method-override");
const { v4: uuidv4 } = require("uuid");

const { faker } = require('@faker-js/faker');

app.use(methodOveride("_method"));
app.use(express.urlencoded({ extended: true }))
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Afzal123@",
    database: "prac_app"
});

app.get('/', (req, res) => {
    let q = `SELECT COUNT(*) FROM user`;

    connection.query(q, (err, result) => {
        if (err) {
            console.log(err);
            return res.send("Some error in DB");
        }
        const count = result[0]["COUNT(*)"];
        res.render("home.ejs", { count });
    });
});

app.get("/users", (req, res) => {
    let q = `SELECT * FROM user`;

    connection.query(q, (err, result) => {
        if (err) {
            console.log(err);
            return res.send("Some error in DB");
        }
        let allUser = result;
        res.render("users.ejs", { allUser });
    });
});

app.get("/users/:id/edit", (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id = '${id}'`;
    connection.query(q, (err, result) => {
        if (err) {
            console.log(err);
            return res.send("Some error in DB");
        }
        let user = result[0];
        res.render("edit.ejs", { user });
        console.log(result)
    });
});

app.patch("/users/:id", (req, res) => {
    let { id } = req.params;
    let { username: newUsername, password: formPass } = req.body
    let q = `SELECT * FROM user WHERE id = '${id}'`;
    connection.query(q, (err, result) => {
        if (err) {
            console.log(err);
            return res.send("Some error in DB");
        }
        let user = result[0];
        if (formPass != user.password) {
            return res.send("Incorrect Password");
        } else {
            let q2 = `UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
            connection.query(q2, (err, result) => {
                if (err) {
                    console.log(err);
                    return res.send("Some error in DB");
                }
                res.redirect("/users");
            })
        }
    });
});

app.get("/newuser", (req, res) => {
    res.render("new.ejs");
});

// app user
app.put("/newuser", (req, res) => {
    let id = uuidv4();
    let { username, email, password } = req.body;
    let q = `INSERT INTO user (id, username, email, password) VALUES ('${id}', '${username}', '${email}', '${password}')`;
    connection.query(q, (err, result) => {
        if(err) {
            console.log(err);
            return res.send("Some error in DB");
        }
        res.redirect("/users");
    });
});

app.get("/users/:id/delete", (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id = '${id}'`;
    connection.query(q, (err, result) => {
        if(err) {
            console.log(err);
            return res.send("Some error in DB");
        }
        let user = result[0];
        res.render("delete.ejs", { user });
    });
});

// delete user
app.delete("/users/:id", (req, res) => {
    let { id } = req.params;
    let { password: formPass} = req.body;
    let q = `SELECT * FROM user WHERE id = '${id}'`;
    connection.query(q, (err, result) => {
        if (err) {
            console.log(err);
            return res.send("Some error in DB");
        }
        let user = result[0];
        if (formPass != user.password) {
            return res.send("Incorrect Password");
        } else {
            let q2 = `DELETE FROM user WHERE id = '${id}'`;
            connection.query(q2, (err, result) => {
                if (err) {
                    console.log(err);
                    return res.send("Some error in DB");
                }
                res.redirect("/users");
            })
        }
    });
});

app.listen(8080, () => {
    console.log("server is running at port 8080");
});


// let getRandomUser = () => {
//     return [
//         faker.string.uuid(),
//         faker.internet.username(),
//         faker.internet.email(),
//         faker.internet.password(),
//     ];
// }

// let userData = [];

// for (let i = 1; i <= 100; i++) {
//     userData.push(getRandomUser());
// }

// let q = `INSERT INTO user (id, username, email, password) VALUES ?`

// connection.query(q, [userData], (err, result) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(result);
//     connection.end();
// });