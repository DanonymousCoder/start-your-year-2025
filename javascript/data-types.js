let variable = "foo";  // this is a string
variable = 0;  // variable is reassigned as a number
variable = false;  // variable is reassigned as a boolean

let foo = variable + 12;
foo = foo + " this is twelve and ";
foo = foo + 0;
console.log(foo);