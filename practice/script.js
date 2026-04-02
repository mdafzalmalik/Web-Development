let a = 4;
console.log(a);
a = true;
console.log(a);

let uname = "afzal";
console.log(uname);

console.log('a' < 'B');

let arr = [1, 2, 3];
console.log(arr);

arr.splice(1, 1);
console.log(arr);

arr.splice(2, 0, 23, 34, 45);
console.log(arr);

for (char of "afzal") {
    console.log(char);
}

const student = {
    stName: "afzal",
    rollNo: 32,
    1: "a"
}

console.log(student);
delete student[1];
console.log(student);

console.log(Math.floor(Math.random() * 10) + 1);

function add(a, b) {
    return a + b;
}

const sub = function (a, b) {
    return a - b;
}

const calculator = {
    add: (a, b) => {
        return a + b;
    }
}

const marks = {
    math: 85,
    phy: 95,
    eng: 80,
    chem: 90,
    getAvg() {
        let avg = (this.phy + this.chem + this.math) / 3;
        console.log(avg);
    }
}

// console.log("loop using let");
// for (let i = 1; i < 5; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 2000);
// }

// console.log("loop using var")
// for (var i = 1; i < 5; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 2000);
// }

let arr1 = [1, 2, 3, 4];

const print = (ele) => console.log(ele);

arr1.forEach(print);

console.log(...arr);
console.log(..."abcdefghijklmnopqrstuvwxyz");

let newarr = [...arr1];
let dataCopy = { ...[5, 8, 9, 3, 0] };

function sum(...args) {
    return args.reduce((res, ele) => res + ele);
}