const x = [1, 2]; // an array
const y = {
  key: "pair",
  date: new Date(),
  generateDate() {
    this.date = new Date();
  },
}; // a key-value pair or a dictionary or object

console.log(x, typeof x);
console.log(y, typeof y);
y.generateDate();
console.log(y);