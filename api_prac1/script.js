// let url = "https://catfact.ninja/fact";

// fetch(url)
//     .then((res) => {
//         console.log(res);
//         return res.json();
//     })
//     .then((data) => {
//         console.log("data1 =", data.fact);
//         return fetch(url);
//     })
//     .then((res) => {
//         return res.json();
//     })
//     .then((data2) => {
//         console.log("data2 =", data2.fact);
//     })
//     .catch((err) => {
//         console.log("Error: ", err);
//     })

// console.log("hello");


// let url = "https://catfact.ninja/fact";

// async function getFacts() {
//     try {
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data);
//     } catch (e) {
//         console.log("Error is: ", e);
//     }
// }

let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let fact = await getFacts();
    let para = document.querySelector(".result");
    para.innerText = fact;
});

let url = "https://catfact.ninja/fact";

async function getFacts() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
    } catch (e) {
        return "No fact found";
    }
}