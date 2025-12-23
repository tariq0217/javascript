function* generatorFunction(){
    yield "First Val"
    yield "second Val"
    yield "third Val"
    return "Final val"
}

let generator = generatorFunction();

console.log(generator.next().value);


console.log("Print the val after value");

console.log(generator.next().value);

console.log("Print the val after value");


console.log(generator.next().value);
console.log(generator.next().value);

function* url(){
    yield "https:/"
    yield "www.unitech.com/"
    yield "homepage"
}

let origin1 = url();

console.log(origin1.next().value);
console.log(origin1.next().value);
console.log(origin1.next().value);
