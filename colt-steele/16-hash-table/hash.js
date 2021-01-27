function hash(key, arrayLen) {
  let total = 0;
  for (let char of key) {
    // map "a" to 1, "b" to 2, "c" to 3, etc.
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }
  return total;
}
console.log(hash('pink', 13));
console.log(hash('orange', 13));
console.log(hash('cyan', 13));
console.log(hash('blue', 13));
console.log(hash('purple', 13));
