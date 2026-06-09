let first_num='';
let second_num='';
let operator=null;
//operation functions
function add(a,b) {
    return a + b;
}
function subtract(a,b) {
    return a - b;
}
function divide(a,b) {
    return a / b;
}
function multiply(a,b) {
    return a * b;
}
//orator function that connects and calls the obove functions
function operate(operator,a,b) {
    let num1=Number(a);
    let num2=Number(b);
    if (operator==='+') {
       return add(num1,num2);
    }
    if (operator==='-') {
        return subtract(num1,num2);
    }
    if (operator==='*') {
      return multiply(num1,num2) ; 
    }
    if (operator==='/') {
        return divide(num1,num2);
    }
}
