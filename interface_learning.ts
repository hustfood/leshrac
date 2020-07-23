// interface of obejct
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
