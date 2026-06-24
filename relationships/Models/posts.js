const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
    .then(() => {
        console.log("DB connected");
    })
    .catch((err) => {
        console.log(err);
    })

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relations");
} 

const userSchema = new Schema({
    username: String,
    email: String
})

const postSchema = new Schema({
    content: String,
    likes: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

// const addData = async () => {
//     let user = await User.findOne({username: "Afzal"});

//     let post2 = new Post({
//         content: "Bye Bye",
//         likes: 45
//     })

//     post2.user = user;

//     let result = await post2.save();
//     console.log(result)
// }

// addData();

const getData = async () => {
    let result = await Post.findOne({}).populate("user", "username");
    console.log(result);
}

getData();