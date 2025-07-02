// index.js

// Initial cats array
const cats = ["Milo", "Otis", "Garfield"];

// 1. Destructive functions

function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

// 2. Non-destructive functions

function appendCat(name) {
  return [...cats, name];
}

function prependCat(name) {
  return [name, ...cats];
}

function removeLastCat() {
  return cats.slice(0, -1);
}

function removeFirstCat() {
  return cats.slice(1);
}

// Exporting (optional for Node environments or test runner)
// module.exports = {
//   cats,
//   destructivelyAppendCat,
//   destructivelyPrependCat,
//   destructivelyRemoveLastCat,
//   destructivelyRemoveFirstCat,
//   appendCat,
//   prependCat,
//   removeLastCat,
//   removeFirstCat
// };
