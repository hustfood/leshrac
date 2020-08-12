// interface of parameter in function
interface LabeledValue {
  label: string;
  color?: number;
  readonly isBig: boolean; 
}

function printLabel(labeledObj: LabeledValue) {
  console.log(labeledObj);
}

let myObj = {color: 10, label: "Size 10 Object", isBig: true};
printLabel(myObj);

// interface of function types
interface SearchFunc {
  (one: string, two:string): boolean;
}

let myFunc: SearchFunc;
myFunc = function(oneStr: string, twoStr: string): boolean {
  let threeStr: string = `${oneStr}_${twoStr}`;
  console.log(threeStr);
  return oneStr.length > twoStr.length;
}

myFunc("1234", "5678");

// interface of indexable types
interface strArray {
  readonly [index: number]: string;
}

let myArray: strArray;
myArray = ["Bob", "Freb"];
console.log(myArray[0])

interface strObject {
  [index: string]: number;
}

let myObject: strObject = {"one":1, "two":2}
console.log(myObject["one"])


// It is possible to support both types of indexers,
// but the type returned from a numeric indexer must be a subtype of the type returned from the string indexer.
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

interface BothOkay {
  [x: number]: Dog;
  [x: string]: Animal;
}

let animal: Animal = {name: "puppy"}
let dog: Dog = {name: "puppy", breed: "well"}

let bothArray: BothOkay = {1: dog, 'two': animal};

// interface of class types (only public side)
interface ShapeInterface {
  longAttr: number;
  setLongAttr(l: number): void;
}

class Shape implements ShapeInterface {
  longAttr: number = 0;
  setLongAttr(l: number) {
    this.longAttr = l;
  }
  constructor(l: number, t: number) {}
}

let shape = new Shape(5, 5);
shape.setLongAttr(3);
console.log(shape.longAttr);

// interface of extend
interface Boy {
  age: number;
}

interface Student extends Boy {
  school: string;
}

interface Graduate extends Student, Boy {
  company: string;
}

let worker: Graduate = {company: 'baidu', school: 'xing', age: 20}

// interface of hybrid types
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}