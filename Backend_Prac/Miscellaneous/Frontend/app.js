// let arr1 = [1,2,3];
// let arr2 = [1,2,3];


// arr1.sayHello = () =>{
//     console.log("arr1");
// }

// arr2.sayHello = () =>{
//     console.log("arr2");
// }

// console.log(arr1.sayHello===arr2.sayHello); // false

// console.log(arr1.pop == arr2.pop); //true


// function PersonMaker(name, age) {
//     const person = {
//         name: name,
//         age: age,
//         talk() {
//             console.log(`Hi, I am ${this.name}`);
//         }
//     }
//     return person;
// }

// let p1 = PersonMaker("afzal", 20);
// let p2 = PersonMaker("ayan", 21);

// console.log(p1.talk === p2.talk)

// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.talk = () =>{
//     console.log(`Hi, I am ${this.name}`);
// };

// let p1 = new Person("afzal", 19);
// let p2 = new Person("ayan", 20);

// console.log(p1.talk === p2.talk)

// class Person{
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     talk() {
//         console.log(`Hi, I am ${this.name}`); 
//     }
// }

// let p1 = new Person("afzal", 19);
// let p2 = new Person("ayan", 20);

// console.log(p1.talk === p2.talk)


class Person {
    constructor(name, age) {
        console.log("person class constructor");
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`Hi, I am ${this.name}`);
    }
}
class Student extends Person {
    constructor(name, age, marks) {
        console.log("student class constructor");
        super(name, age);
        this.marks = marks;
    }

}

let s1 = new Student("ayan", 20, 99);