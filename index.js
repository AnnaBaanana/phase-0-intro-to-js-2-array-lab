// Write your solution here!
function cats() {
    return cats=["Milo", "Otis", "Garfield"]
};

console.log(cats());

function destructivelyAppendCat(name) {
    return cats.push("Ralph")
};

console.log(destructivelyAppendCat());
console.log(cats);

function destructivelyPrependCat(name) {
    return cats.unshift("Bob")
}; 

console.log(destructivelyPrependCat());
console.log(cats);

function destructivelyRemoveLastCat() {
    return cats.pop()
};

console.log(destructivelyRemoveLastCat());
console.log(cats);

function destructivelyRemoveFirstCat() {
    return cats.shift()
};

console.log(destructivelyRemoveFirstCat());
console.log(cats);

function appendCat(name) {
    return [...cats, "Broom"]
};

console.log(appendCat());

function prependCat(name) {
    return ["Arnold", ...cats]
};

console.log(prependCat());

function removeLastCat() {
    return cats.slice(0,-1)
};

console.log(removeLastCat());

function removeFirstCat() {
    return cats.slice(1,)
};

console.log(removeFirstCat());
