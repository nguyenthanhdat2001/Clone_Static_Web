// const myObject = {
//     a: 1,
//     b: 2
// }

// console.log(myObject['a'])
// console.log(myObject)
// console.log(typeof(myObject))

// const myArray = [1,2]
// console.log(myArray[0])
// console.log(myArray)
// console.log(typeof(myArray))

// const myFunction = function(){
//     console.log("Hello")
// }

// console.log(myFunction)
// console.log(typeof(myFunction))

// const myArray2 = myArray;
// console.log(myArray2)
// myArray2[0] = 9
// console.log(myArray[0], myArray2[0])

// const PI = 3.14
// // PI = 3.15; => Throw: Assignment to constant
// const person = {}
// person['a'] = 1

// if(true){
//     const a = 2
//     let b = 3
//     var c = 4
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
//     // console.log(a)
//     // console.log(b)
//     console.log(c)

// const add3 = (a,b) => {
//     console.log('a + b = ', a+b)
//     return a + b;
// }

// const add1 = (a) => a + 1;

// console.log(add3(1,2));
// console.log(add1(1));
// console.log([1,2,3].map(add1))


// var ES5 = function ES5(phrase){
//     return phrase.split('')
// }
// console.log(ES5("Hello"))

// var ES6 = (phrase) => phrase.split("")
// console.log(ES6("ES6    Awesome"))

//==============Duyệt mảng=====================
// let Person = [
//     {
//         name: "Dat",
//         age: 20
//     },
//     {
//         name: "Dung",
//         age: 22
//     },
//     {
//         name: "Hung",
//         age: 24
//     }
// ]
// console.log(Person.map((person) => (person.age)))

//===================================
// var test = (id, name) => ({id: id, name: name})
// console.log(test(3,"Dung"))
//=====================================
// var hello = function(){
//     console.log("hello")
// }
// hello();
//====================================
// function sum(message,...num){
//     let total = 0;
//     for(let i = 0; i<num.length ; i++){
//         total = total + num[i];
//     }
//     console.log(message,total)
// }

// sum("Tong la", 2,3,4,5)


// =============nối mảng===============
// let arr1 = [1,2,3]
// let arr2 = [3,4,5]

// let arr3 = [...arr1, ...arr2]
// console.log("Hello",arr3,"Hi")

// =================sao chép====================
// let obj1 = {name: "Dat"}
// let clone_obj = {...obj1}
// console.log(clone_obj)

// ================Gộp Object======================
// var obj1 = {name: 'dat'}
// var obj2 = {year: '2001'}
// var obj3 = {...obj1, ...obj2}
// console.log(obj3)

// =========================================
// function myFunction(param1, param2, param3){
//     console.log(param1 + param2 + param3)
// }
// var args = [5,2,3]
// myFunction(...args)
//=====================================
// function myFunction(a,b,c,d,e){
//     console.log(a+b+c+d+e)
// }
// var args = [1,2,3]
// myFunction(0,...args, 10)

//===========Tham số mặc định==============
// function myFunction(name = 'Dat'){
//     console.log("Hello " + name)
// }
// myFunction('Quang anh')
// myFunction();

// function power({base = 1, power = 2} = {}){
//     return Math.pow(base, power)
// } 
// console.log(power())
// console.log(power({}))
// console.log(power({base: 3, power: 10}))

import {sayHello} from './test.mjs'

sayHello()
