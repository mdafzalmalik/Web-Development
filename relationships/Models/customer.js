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

const orderSchema = new Schema({
    item: String,
    price: Number
})

const customerSchema = new Schema({
    name: String,
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: "Order"
        }
    ]
});

// customerSchema.pre("findOneAndDelete", async() => {
//     console.log("PRE MIDDLEWARE");
// });

customerSchema.post("findOneAndDelete", async(customer) => {
    if(customer.orders.length){
        let res = await Order.deleteMany({_id : {$in : customer.orders}});
        console.log(res);
    }
});

const Order = mongoose.model("Order", orderSchema);

const Customer = mongoose.model("Customer", customerSchema);

const findCustomer = async () => {
    let result = await Customer.find({}).populate("orders");
    console.log(result[0]);
}

const addCust = async () => {
    let newCust = new Customer({
        name: "Aman"
    })

    let newOrder = new Order({
        item: "Burger",
        price: 200
    })

    newCust.orders.push(newOrder);

    await newOrder.save();
    await newCust.save();

    console.log("Added new customer");
}

const delCust = async () => {
    let data = await Customer.findByIdAndDelete("6a22ce1dca82f7d80028b5eb");
    console.log(data);
}

// addCust();
delCust();


// const addCustomers = async () => {
//     let cust1 = new Customer({
//         name: "Afzal"
//     })

//     let order1 = await Order.findOne({item: "Momos"})
//     let order2 = await Order.findOne({item: "Chips"})

//     cust1.orders.push(order1);
//     cust1.orders.push(order2);

//     let res = await cust1.save();
//     console.log(res);
// }

// addCustomers();

// const addOrders = async () => {
//     let res = await Order.insertMany([
//         {item: "Momos", price: 20},
//         {item: "Chips", price: 10},
//         {item: "ColdCoffie", price: 90}
//     ]);
//     console.log(res);
// }

// addOrders();