// Variables

const a = '1';

console.log("aaa", a)

let hello: string = "world";

// Functions

const getFullName = (name: string, surname: string): string => {
    return name + " " + surname;
};

console.log(getFullName('Moster', 'Lessons'))

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



let username: string = 'alex';

let pageName: string | number = '1';

let errorMessage: string | null = null;

//let user3: UserInterface | null = null;

 //Type Alliases in typescript

type ID = string;
type PopularTag = string;

interface UserInterface {
    id: ID;
    name: string;
    surname: string;
}

const PopularTags: PopularTag[] = ['dragon', 'coffe']