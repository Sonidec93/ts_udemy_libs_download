//// <reference path ="namesapce.ts" />
function calling(a: string, _b: number, cb: (x: number) => { [name: string]: boolean }) {
    let someValue = cb(+a);
    console.log(someValue);
}


calling("10", 45, (x: number) => {

    return { someValue: Boolean(x) }
})

var userInput: unknown;
userInput = 'Mukul';
var username: string;
if (typeof userInput == 'string')
    username = userInput
//'unknown' is less flexible than 'any' and should be preffered where you are not sure about the type of a variable but assigning it to another variable you want to make sure it has some specific type before assigning


function handleError(message: string, errCode: number): never {
    throw { message: message, errorCode: errCode };
}

//never return type is used in cases where error is thrown or the function does not return anything

// handleError('Some error occured', 500); 


class MyArray extends Array {

    convert() {
        return this.reduce((prevVal, currVal) => {
            return prevVal + currVal;
        }, 100);
    }
}

var myarr = new MyArray(3);
myarr.push(3, 4, 5);
console.log(myarr.convert());


type typeA = number | string;
type typeB = number | boolean;

type Combinable = typeA & typeB;

let combinedTypeVar: Combinable = 12;


function classDecorator(constrFn: Function) {
    console.log('decorator 1');
    constrFn.prototype.display = function () {
        console.log('My name is ' + this.name);
    }
}

function renderingDecorator(tag: string, _value?: string) {
    console.log('decorator 2');
    return function <T extends { new(...arg: any[]): { name: string } }>(constrFn: T) {

        return class extends constrFn {
            constructor(...arg: any[]) {
                super(arg);
                if (tag) {
                    const el = document.createElement(tag);
                    el.style.height = '2rem';
                    el.textContent = 'Mukul';
                    el.style.width = '10rem';
                    el.style.margin = "2rem auto";
                    el.style.background = 'black';
                    el.style.color = 'white'
                    el.style.textAlign = 'center';
                    const body = document.querySelector('#custom')!;
                    body.insertAdjacentElement('afterbegin', el);

                }
            }
        }


    }
}

@classDecorator
@renderingDecorator('DIV')
class MyClass {
    constructor(public name: string) { }

    get myname() {
        return this.name;
    }

}

let obj1 = new MyClass('Mukul');

// console.log((<any>obj1).display());

function genericFunction<T extends K, K>(a: T, _b: K) {

    return a;

}

console.log(genericFunction('hh', 'mukul'));





