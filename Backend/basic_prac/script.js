// for(let i = 0; i < 5; i++){
//     console.log("hello");
// }


// let args = process.argv;

// for(let i = 2; i < args.length; i++){
//     console.log("hello", args[i])
// }

// const math = require("./math");

// console.log(math.sum(1,2));

// const info = require("./fruits");

// console.log(info[0]);

import {sum, g} from "./math.js"
import { generate} from "random-words";

console.log(generate());