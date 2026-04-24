// function savetoDB(data, success, failure) {
//     let netSpeed = Math.floor(Math.random() * 10) + 1;
//     if(netSpeed > 4) {
//         success();
//     } else{
//         failure();
//     }
// }

// savetoDB(
//     "afzal",
//     () => {
//         console.log("success: your data was saved");
//         savetoDB("malik",
//             () => {
//                 console.log("success2: data2 saved");
//             }, () => {
//                 console.log("failure2: data2 not saved");
//             }
//         )
//     },
//     () => {
//         console.log("failure: data not saved");
//     }
// )

function savetoDB(data) {
    return new Promise((resolve, reject) => {
        let netSpeed = Math.floor(Math.random() * 10) + 1;
        if (netSpeed > 4) {
            resolve("success: data was saved"); //result
        } else {
            reject("failure: weak connection"); //error
        }
    })
}

// let request = savetoDB("afzal");

// request.then(() => {
//     console.log("Promise was resolved");
//     console.log(request);
// })
// .catch(() => {
//     console.log("Promise was rejected");
//     console.log(request);
// });

// savetoDB("afzal")
//     .then(() => {
//         console.log("data1 saved. Promise was resolved");
//         savetoDB("malik")
//         .then(() => {
//             console.log("data2 saved")
//         })
//     })
//     .catch(() => {
//         console.log("Promise was rejected");
//     });

savetoDB("afzal")
    .then((result) => {
        console.log("data1 saved");
        console.log("result of promise:", result);
        return savetoDB("malik");
    })
    .then((result) => {
        console.log("data2 saved");
        console.log("result of promise:", result);
    })
    .catch((error) => {
        console.log("Promise was rejected");
        console.log("error of promise:", error);
    });

