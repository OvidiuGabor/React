var n = 12;

let newVar = "This ia a new var";

const constantVar = "This is  a constat variable";
console.log(constantVar);

//arrow function
const myFunc = () => {
  console.log("this is a arrow function");
};
myFunc();

//very short function when you have only 1 param, and a simple return
const veryShortFunction = (number) => number * number;
console.log(veryShortFunction(3));

//previous normal function
let oldOne = function (param1) {
  return param1;
};
console.log(oldOne("This is an old function"));

//Import from a different file;
//Works only with Node.js v13 and above
//import animal from "animal.js";

//animal();

//Next Generation classes
class Vertebrate {
  bones = true;

  checkBones = () => {
    console.log(this.bones);
  };
}
class Animal extends Vertebrate {
  legs = 4;
  bones = false;

  countlegs = () => {
    console.log(this.legs);
  };
}

let animal = new Animal();
animal.countlegs();
animal.checkBones();

//Spread & Rest operator '...'
//Spread => Used to split up array or Object properties
//const newArray = [...oldArray, 1,2 ]
//const newObject - {...oldObject, newProp: 5}
//REST => used in function to merge arguments into an array
//Normally you will have like this
//function sortNumber(1,2,3,4,45,55){}
//function sortNumber(...args){sort} => can have an unlimited number of arguments

const number = [1,2,3]
let newnumbers = [...number, 5];
console.log(newnumbers);

const person = {
    name: "ovidiu",
    age: 32
}

//{name} = {name:"sss", age:20};


