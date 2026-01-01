let url = "http://universities.hipolabs.com/search?name=";

let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    let colleArr = await getColleges(country);
    showColleges(colleArr);
});

function showColleges(colleArr){
    let list = document.querySelector("#list");
    list.innerText = '';
    for(col of colleArr){
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}


async function getColleges(country) {
    try {
        let res = await axios.get(url + country);
        return res.data;
    }catch(e) {
        console.log(e);
    }
}