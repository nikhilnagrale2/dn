let a = 10;
// a = "Hello";

let b;
b = 10;
b = "striign";

// 
let c: number = 10;
// c = false;

//  diff data type
let n: number = 10;
let s: string = "hello";
let bo: boolean = false;
let nu: null = null;

console.log(a);

//  Array
let arr = [1, 2, 3];
// arr.push("hhell");
console.log(arr);
let arrs: number[] = [1, 2, 3, 4];
let sarr: string[] = ["2", "@3"];
let asr: (number | string)[] = [1, 2, 3, "#", "#4"];
// | unison operator 

// object
const user = {
    name: "Gaurav",
    age: 20,
}
// user.name = 2;
console.log(user);

// interface
interface User{
    name: string,
    age:number,
}
let user2: User = {
    name: "Joghn",
    age: 30,
    // address: "India" we cant add additional var which not available in interface
}

//  Object Oriented
class App{
    printHello() {
        console.log(":Heloo");
    }
}
const app = new App();
app.printHello();


// custom datatype
type Door = "open" | "close";
let door: Door = "open";
// door = "none";

//  any datatype
let aaaa: any;

//  functions
function add(a:number, b:number):number {
    return a + b;
}
// console.log(add(1, "2"));
console.log(add(1,2));



export { }