const mongoose = require("mongoose");

main()
    .then(() => {
        console.log("Connection successfull");
    })
    .catch((err) => {
        console.log(err);
    })
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model("User", userSchema);

User.findByIdAndDelete("69f8f0d15cc6129c9d81807f")
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });

// User.findByIdAndUpdate("69f8f45dddb548c893a9aa31", {age: 25}, {new: true})
// .then((result) => {
//     console.log(result);
// })
// .catch((err) => {
//     console.log(err);
// });


// User.find({age: {$gt: 23}})
//     .then((result) => {
//         console.log(result[0].name);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// const user1 = new User({
//     name: "Afzal",
//     email: "afzal@gmail.com",
//     age: 20,
// })

// user1.save()
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// User.insertMany([
//     {name: "kunal", email: "kunal@gmail.com", age: 21},
//     {name: "Akash", email: "akash@gmail.com", age: 21},
// ]).then((result) => {
//     console.log(result);
// });

// User.insertMany([
//     {name: "Sorab", email: "sora@gmail.com", age: 26},
//     {name: "Harsh", email: "harsh@gmail.com", age: 24},
//     {name: "Ankit", email: "ankit@gmail.com", age: 23},
// ]).then((result) => {
//     console.log(result);
// });
