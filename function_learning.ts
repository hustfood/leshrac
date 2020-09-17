// simple example
function add1(x: number, y: number): number {
    return x + y;
}

let add2 = function (x: number, y: number): number {
    return x + y;
}

console.log(add1(1, 2), add2(3, 4));

// function type
let add3: (x: number, y: number) => number = function(
    x: number,
    y: number
): number {
    return x + y;
}

// optional parameter
function name1(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + " " + lastName;
    }
    return firstName;
}

console.log(name1('foo'), name1('foo', 'jamfung'))

// default-initialized parameter
function name2(firstName: string, lastName = "jamfung") {
    return firstName + " " + lastName;
}

console.log(name2('foo'), name2('foo', 'boom'))

// rest parameters
function name3(firstName: string, ...restName: string[]) {
    return firstName + " " + restName.join(" ")
}

console.log(name3('foo', 'jam', 'fung', 'hello', 'bye'))

// this parameter

