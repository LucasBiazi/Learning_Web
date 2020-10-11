// There are 3 manners to declare a variable in js: var, let and const.

// Var variables can be used globally
var global = "Global Variable";

function variable_global() {
  console.log("I can be used in here! I'm a " + global);
}
variable_global();

// Let variables are the ones that may have its values reassigned. It only works whithin its scope (declaration block).
let i = 0;
for (i; i < 10; i++) console.log("Let is cool");
console.log("Value of i after the for loop: " + i);

// Const variables are the ones that will not have its values reassigned. It only works whithin its scope (declaration block).
// Const variables will not have their value updated/re-declared.
const name = "Lucas Biazi Ferreira";
function my_quote() {
  console.log(
    "'You can always change the value of the variables,\nhowever, by using let/const, your code is easier to read!' -" +
      name
  );
}
my_quote();
// The order you should embrace is: const > let > var
