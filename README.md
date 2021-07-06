# DN Web FrontEnd

<details>
  <summary>Dirty Notes Warning</summary>

# **HTML CSS**

## Day 1

---

## Day 2

---

## Day 3

---

## Day 4

- Positions
- Display
- Overflow
- Semantic Elements
  - Section
  - Article
  - Header
  - Footer
  - Nav
  - Details - Summary
  - Time
  - Aside

---

# **Javascript Basics**

## Day 5

### Javascript Basics

- document - A global Object of a javascript
- window.onload , document.getElementById(), getQuerySelectorAll()
- addEventListener, parseInt,
- Event Bubbling - In css = OnClick= "function()"
- In addEventListner function we can use event.stopPropogation
- Event Capturing
- var are by default initialized undefined but let gives an error
- typeof,console.log,for loop, let ,array, forEach, for item of arr,
- if else, variable dont have type values have,
- coersion to number ->Number() way, +n way, parseInt way
- coersion to boolean -> !!() way or Boolean
- coersion to string -> toString or concatenate with empty string
- a==b, a===b
- Global Scope -
- Lexical scope -
- Functional scope -
- Block scope - { }
- Diff between let var const - var can be accessed from outside of block
- var can have acceess in whole function
- let doesnt have access outside of block

---

## Day 6

### Javascript Arrays

- Array and Accessing Elements
- Javascript Arrays, Accessing, .concat, .join, slice, indexOf(value), lastIndexOf(value),
- Iterating List
  - forEach, forOf, forIn, Simple For,
  - a.some(item=> item===10),a.every(item=>item===1),a.filter(item=>item==1),map(item=>item=10)
  - ```js
        a.reduce((acc,item)=>{acc=acc+item; retun acc;},0);
    ```
- Mutating List

  - .pop,.reverse,.push,.sort, splice,shift,unshift,.length()

  - sort((a,b)=> a-b);
  - splice(start,delete count, items);
  - shift - pop from front
  - unshift - push from front
  - toString
  - toLocaleString
  - isArray
  - sort
  - splice
  - length

---

## Day 7 and 8

### Javascript Objects

- Syntax - Create an Object ={},=new Object({});,=Object.Create(prototype object);,
- Dot Notation, Bracket Notation, Methods in Objects -
- Create Properties from outside object, Object are Mutable,
- for in loop, Nested Objects, Object.Keys(objectName), Object.Values(objectName),
- Object.freeze(objectName), Object.getOwnPropertyNames(objectName),objectName.splice(),
- Json.stringify, Json.parse
- get and set on objects, delete property
- Object Constructors
- Object.assign(target,source);
- spread operator for clone objects or arrays - newobje = {...source}
- rest Parameters - a,b,...x fun(a,b,x,c,c,d,d) a b will be assign rest will store in x array
- Arguments Object -
- what if number of parameters we pass are higher than required - ans - it will only take required number of - parameters
- rest parameter must be the last in parameter

---

## Day 9

- console.log(window), const new=window.open(), new.close(), new.location="https://google.in",
- global scope ==> variables become property in window, function become method in window,
- This Keyword,
- global scope, function scope var with this keyword
- call keyword with parameter,
- apply keyword same as call keyword parameter are passed as array
- bind keyword, same as call, but we can create kind of const for it and store the call and call whenever - needed, functionname.call(object), functioname me this keyword,
- Hoisting - access variable before define => undefined, same for arrow function
- call funciton before define => correct output,
- spread operator - creates clone not reference, create copy of two array and merge,
- overwrite when two object copy, update values of object using spread operator

- Events and Event Listeners

```js
var x=document.querySelcctor(.classname);
x.addEventListener('click',()=>{ box.classlist.contains('classname') });
```

---

## Day 10

- Functions
- function expression
- (function(){});
- array function
- anonymous function
- arrow function
- diffrence in arrow and normal function declaration - this value
- no execution context is made in case of arrow function. ex
- default parameters
- callback function
- setTimeOutput(fun,time);
- setTimeOutput(fun,time,more funs); more fun will run first
- asynchronous programming
- Function Chaining

---

## Day 11

- Prototypal Inheritance
- ```js
  let shape = {
    height: 10,
    widhth: 10,
  };

  let circle = {
    radius: 2,
  };

  circle.__proto__ = shape;
  console.log(circle.height, circle.radius); // 10, 2
  ```

- Object.getPrototypeOf
- Derived Class
- Base Class
- super keyword

## Day 12

### Synchronous and Asynchronous JS

[Synchronous and Asynchronous](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing)

- Event Loop
- setTimeout and setInterval
- Blocking vs Non Blocking
- localStorage

## Day 13

#### Promise

```js
let promise = new Promise((resolve, reject) => {
  let a = 2;
  if (a === 2) {
    // resolve(); // promise fulfilled
    resolve("Success"); // can also pass json data
  } else {
    // reject(); // uncaught error
    reject("Failed");
  }
});

promise.then((data)=>{
  console.log("Promise was Resolved");
  console.log(data);
});
.catch(()=>{
  console.log("Promise was Rejected");
})
```

- 3 types of states = resolve, pending, reject
- works asynchronously
- then executes when promise resolved
- catch executes when promise rejects

#### Fetch API

```js
fetch("https://api.github.com/users/nikhilnagrale2")
  .then((res) => res.json())
  .then((data) => console.log(data));
```

---

#### Async

[Async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

```js
async function hello() {
  return "Hello";
}

var a = hello(); // returns promise
console.log(a); // promise
a.then((data) => {
  console.log(data); //hello
});
```

#### Await

[Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)

```js
function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function f1() {
  var x = await resolveAfter2Seconds(10);
  console.log(x); // 10
}

f1();
```

#### Browser caching

#### Local Storage

- Set Data

```js
localStorage.setItem("username", "op");
```

- remove Data

```js
localStorage.removeItem("username");
```

- Get Data

```js
localStorage.getItem("username");
```

- Clear Data

```js
localStorage.clear();
```

#### Session Storage

- Set Data

```js
sessionStorage.setItem("username", "op");
```

- remove Data

```js
sessionStorage.removeItem("username");
```

- Get Data

```js
sessionStotage.getItem("username");
```

## Day 14

### Event Handling

- Event Listner - what type
- Event Handler
- click, mouseOver, mouseOut, keyup, keydown, keypress, focus, blur, change, submit, onformsubmit, onoffline, onload, onresize, onvideoplay,

# **REACT**

## Day 15

### Why we use React?

- Fast, Large community, OpenSource, blah blah
  [React JS](https://reactjs.org/)

### React and Virtual DOM

### JSX Basics - JavaScript XML

### Component Basics

## Day 16

### Install NodeJs, NPM

- How to install create react app

```js
npm install -g create-react-app
```

- How to create react app

```js
npx create-react-app "AppName"
```

- How to start Server

```js
npm start
```

- What is BabelJs
- How to import React and ReactDOM

```js
import React from "react";
import ReactDOM from "react-dom";
```

- Render ReactDOM

```js
ReactDOM.render(<h1>Hello Wordl</h1>, document.getElementById("root"));
```

### Functional Components

```js
function Navbar() {
  return <h1>Navbar</h1>;
}

function App() {
  return (
    // jsx
    <div>
      <Navbar />
      <h1>Hello World!</h1>
    </div>
    // jsx
  );
}

//  Prop -> FC -> JSX
//  Call App
ReactDOM.render(<App />, document.getElementById("root"));
```

### Import Export JSX

```js
export default App; // Export Jsx

import App from "./App";
```

### Style CSS with React

- create file in src
- import css file
- instead of class use className

### Parent Child Component

```js
const Card = () => {  // parent component
  const Image = () => { // child component
    return <img src="https://cubettech.com.jpg" alt="" />;
  };
  return (
    <div className="card">
      <Image />
    </div>
    <h2>React Card</h2>
  );
};
```

## Day 17

### JSX

- JSX is an extension to the JavaScript language syntax

```js
const componentWithoutJSX = React.createElement(
  "h1",
  {
    // attributes,
    className: "text",
  },
  "Hello World"
);

const componentWithJSX = <h1 className:"text">Hello World</h1>; // babel converts to above

function App() {
  return componentWithoutJSX;
}
```

### HTML Vs. JSX

### Inline Css

```js
function App(){
  return (
    <div className="card" style="{{backgroundColor:"blue"}}">
      <h1>Title</h1>
    </div>
  )
}
```

### React Props

```js
function App(props){
  return (
    <div className="card" style="{{backgroundColor:"blue"}}">
      <h1>Title</h1>
    </div>
  )
}

<App img="xyz" title="xyzs"/>
```

## Day 18

### Inline Styling

```js
<button style={{ backgroundColor: "green", color: "blue" }}>Download</button>
```

- or simply create object and assign
- we can also use conditionals to give different class

### Reusable Components

</details>
