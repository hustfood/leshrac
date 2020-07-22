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