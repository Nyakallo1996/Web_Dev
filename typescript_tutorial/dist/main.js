// Variables
var a = '1';
console.log("aaa", a);
var hello = "world";
// Functions
var getFullName = function (name, surname) {
    return name + " " + surname;
};
console.log(getFullName('Moster', 'Lessons'));
// Interfaces
/*interface UserInterface {
    name: string;
    age?: number;
    getMessage(): string
}

const user: UserInterface = {
    name: 'Monster',
    age: 30,
    getMessage() {
        return 'hello' + name;
    },
};

const user2: UserInterface = {
    name: "Phil"
}


const user: {name: string; age: number} = {
    name: 'Nyakallo',
    age: 11,
};*/
// Types and Unions
// Union Operator
var username = 'alex';
var pageName = '1';
var errorMessage = null;
var PopularTags = ['dragon', 'coffe'];
var dragonsTag = 'dragon';
//Any/Void/Never/Unknown
//Void
var doSomething = function () {
    console.log('doSomething');
};
//Any
var foo = 'foo';
console.log(foo.bar());
//Never
var playSomething = function () {
    throw 'never';
};
//Unknown
var vAny = 10;
var vUnknown = 10;
var s1 = vAny;
//let s2: string = vUnknown;
//Type Assertion 
var s2 = vUnknown;
var pageNumber = '1';
var numericPageNumber = pageNumber;
//Working with the Dom
//working with input data
/*const someElement = document.querySelector('.foo') as HTMLInputElement;

console.log('someElement', someElement.value);*/
//adding listerners
var someElement = document.querySelector('.foo');
