"use strict";
// Object , Array and function
/*Assignment 1: Building Your Friend List
Learning Objective: Practice working with objects and arrays in TypeScript to create a data
structure.
Task: Create a program that manages a simple friend list.
1. Define an object named people containing an empty array called friends. 2. Create
three separate objects, each representing a friend, with properties like firstName, lastName,
and optionally id.
3. Add these friend objects to the friends array within the people object.
4. Output the entire people object to the console, displaying your information and your friend list.*/
// type Friends = {
//   firstName: string,
//   lastName: string,
//   id? : number
// };
// let people = {friends : [] as Friends[]};
// let friend1 : Friends = {
//   firstName: "Seema",
//   lastName: "Shahid",
//   id: 234
// };
// let friend2: Friends = {
//   firstName: "Zara",
//   lastName: "Khan"
// };
// let friend3 : Friends ={
//   firstName: "Fozia",
//   lastName: "Kahlid",
//   id: 114
// }
// people.friends.push(friend1,friend2,friend3);
// console.log(people);
/*Assignment 2:Manipulating an Array: Rearranging Words
Objective:
Rearrange an array using array methods to form the sentence "I am a student of
GIAIC". Steps:
1. Scrambled Array:
o Start with an array of elements in a scrambled order, like:
const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
• Modify the Array:
• Use methods like split(), join(), push(), pop(), shift(), and unshift() to: o
Convert non-strings (booleans, numbers) to strings if needed.
o Split elements into character arrays (optional).
o Rearrange characters or elements in the desired order (modify original array or
create temporary arrays).
• Output the Result:
• Use join() to combine elements back into a single string: "I am a student of GIAIC".*/
const scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
scrambledArray.splice(2, 4);
scrambledArray.pop();
scrambledArray.unshift("I");
scrambledArray.splice(1, 0, "am", "a");
scrambledArray.push(".");
const correctArray = scrambledArray.join(" ");
console.log(correctArray);
// const scrambledArray = ["student","of",true,123,"am","a","GIAIC","I"];
// scrambledArray.splice(2,4);
// scrambledArray.pop();
// scrambledArray.unshift("I");
// scrambledArray.splice(1,0,"am","a");
// const Join = scrambledArray.join(" ");
// console.log(Join);
/*Assignment 3: Company Product Catalog
Learning Objective: Implement data structures in TypeScript to represent and manage product
information.
Task: Create a program to represent a product catalog using an array and perform basic queries.
1. Define an array named inventory to store product information.
2. Create three separate objects, each representing a product, with properties like name,
model, cost, and quantity.
3. Add these product objects to the inventory array using an appropriate array method.
4. Access and log the quantity property of a specific product (e.g., third product) in the
inventory array.
5. Explore adding and accessing more elements within the inventory array to understand
how to manage product data.*/
// let inventory: {name : string; model: string; cost: number; quantity: number}[] = []
// let product1 = {
//   name : "HP-laptop",
//   model : "ProBook",
//   cost : 50000,
//   quantity : 4
// };
// let product2 = {
//   name: "Hp-laptop",
//   model: "EliteBook",
//   cost: 90000,
//   quantity: 6
// };
// let product3 = {
//   name: "Dell-laptop",
//   model: "Latitude",
//   cost: 120000,
//   quantity: 10
// };
// inventory.push(product1,product2,product3)
// console.log(`Quantity of the product3 is ${inventory[2].quantity}`);
// let product4 = {
//   name: "MacBook",
//   model: "Air",
//   cost: 150000,
//   quantity: 8
// };
// let product5 = {
//   name: "Lenovo-laptop",
//   model: "ThinkPad",
//   cost: 70000,
//   quantity: 12
// };
// inventory.push(product4,product5);
// console.log(`Model of the the Product4 is "${inventory[3].model}"`);
// console.log(`Name of Product5 is "${inventory[4].name}" and Product1's model is "${inventory[0].model}"`);
// console.log(`Product2 cist is ${inventory[1].cost}`)
// for (let i=0; i < inventory.length; i++) {
//   console.log(`Product ${i +1}`,inventory[i])
// }
/*Assignment 4: Student List Organizer
Learning Objective: Get comfortable with data structures (objects and arrays) and basic
functions in TypeScript.
Tasks:
1. Student Data: The provided code defines an interface named Student that describes
student information like name, senior status (true/false), and whether they've completed
their assignments (true/false).
o Imagine this as a template for organizing student details.*/ 
