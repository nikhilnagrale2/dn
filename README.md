# DN Web FrontEnd

<details>
  <summary>Dirty Notes Warning</summary>

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



</details>
