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
    addresses: [
        {
            _id: false,
            location: String,
            city: String
        }
    ]
})

const user = mongoose.model("user", userSchema);

let addUsers = async () => {
    let user1 = new user({
        username: "afzal",
        addresses: [
            {
                location: "TYC",
                city: "Agra"
            }
        ]
    });

    user1.addresses.push({
        location: "Rambagh",
        city: "Agra"
    })

    let result = await user1.save();
    console.log(result);
}

addUsers();