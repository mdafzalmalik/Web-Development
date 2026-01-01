// let inp = document.querySelector("input");

// let para = document.querySelector('p');

// inp.addEventListener("input", function(event){
//     // let paraleng = para.textContent.length
//     // console.log(inp.value);
//     // para.innerText = inp.value;
//     console.log(event.target);
// });

// para.addEventListener("click", function(event){
//     console.dir(event.target.nodeName)
// })

// function savetoDb(data, success, failure) {
//     let netSpeed = Math.floor(Math.random() * 10) + 1;
//     if (netSpeed > 4) {
//         success();
//     } else {
//         failure();
//     }
// }

// savetoDb(
//     "Afzal",
//     () => {
//         console.log("Succes: Your data is stored");
//         savetoDb(
//             "Malik",
//             () => {
//                 console.log("Succes2: Your data2 is stored");
//             },
//             () => {
//                 console.log("Failure2: Weak connection, your data2 is not stored");
//             }
//         );
//     },
//     () => {
//         console.log("Failure: Weak connection, your data is not stored");
//     }
// );

// function savetoDB(data) {
//     return new Promise((resolve, reject) => {
//         let netSpeed = Math.floor(Math.random() * 10) + 1;
//         if (netSpeed > 4) {
//             resolve("SucSucces: Your data is stored");
//         } else {
//             reject("Failure: Weak connection, your data is not stored");
//         }
//     });
// }

// async function showDBResult() {
//     try {
//         const result1 = await savetoDB("Mohammad");
//         console.log(result1);
//         const result2 = await savetoDB("Afzal");
//         console.log(result2);
//         const result3 = await savetoDB("Malik");
//         console.log(result3);
//     } catch (error) {
//         console.log(error);
//     }
// }

// showDBResult();

// savetoDB("Mohammad")
//     .then((result) => {
//         console.log("data1");
//         console.log(result);
//         return savetoDB("Afzal");
//     })
//     .then((result) => {
//         console.log("data2");
//         console.log(result);
//         return savetoDB("Malik");
//     })
//     .then((result) => {
//         console.log("data3");
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log("rejected");
//         console.log(error);
//     });


// async function greet() {
//     throw "random error";
//     return "hello";
// }

// greet()
//     .then((result) => {
//         console.log("promise was resolved");
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log("promise was not resolved")
//         console.log(error);
//     });

// let h1 = document.querySelector("h1");

// function changeColor(color, delay){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             h1.style.color = color;
//             resolve("color changed")
//         }, delay);
//     });
// }

// async function resultColor() {
//     await changeColor("red", 1000);
//     await changeColor("green", 1000);
//     await changeColor("blue", 1000);
// }

// resultColor();


let jsonData = '{"message":"https:\/\/images.dog.ceo\/breeds\/pomeranian\/n02112018_2255.jpg","status":"success"}'

let validData = JSON.parse(jsonData);

console.log(validData.message);