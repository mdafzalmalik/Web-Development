// let url = "https://catfact.ninja/fact";

// fetch(url)
//     .then((res) => {
//         return res.json();
//     })
//     .then((data1) => {
//         console.log("data1: ", data1.fact);
//         return fetch(url);
//     })
//     .then((res) => {
//         return res.json();
//     })
//     .then((data2) => {
//         console.log("data2: ", data2.fact)
//     })
//     .catch((err) => {
//         console.log(err);
//     });


// async function getFacts() {
//     try{
//         let res = await fetch(url);
//     let data = await res.json();
//     console.log(data.fact);
//     }
//     catch(e) {
//         console.log(e);
//     }
// }

// let btn = document.querySelector("button");

// btn.addEventListener("click", async function(){
//     let fact = await getFacts();
//     let para = document.querySelector("#result");
//     para.innerText = fact;
// })

// async function getFacts() {
//     try {
//         let res = await axios.get(url);
//         return res.data.fact;
//     }
//     catch (e) {
//         console.log(e);
//         return "No result was found"
//     }
// }

// let url2 = "https://dog.ceo/api/breeds/image/random";

// let btn = document.querySelector("button");

// btn.addEventListener("click", async function(){
//     let imgLink = await getImages();
//     let img = document.querySelector("#imgResult");
//     img.src = imgLink;
// })

// async function getImages() {
//     try {
//         let res = await axios.get(url2);
//         return res.data.message;
//     }
//     catch (e) {
//         console.log(e);
//         return "No result was found"
//     }
// }

const url3 = "https://icanhazdadjoke.com/";

async function getJokes() {
    try{
        const config = {headers: {Accept: "application/json"}};
        let res = await axios.get(url3, config);
        console.log(res.data.joke);
    }catch(e) {
        console.log(e);
    }
}


