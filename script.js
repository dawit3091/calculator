let first_num='';
let second_num='';
let operator=null;
//operation functions


let powerOn=true;






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


const displayText=document.getElementById('text_display');
const numberBtn=document.querySelectorAll('[data-number]');
const equalBtn=document.querySelector('.equal');
const operatorBtn=document.querySelectorAll('[data-operator]');
const clearBtn=document.querySelector('.clear');
const powerBtn=document.querySelector('.power');

powerBtn.addEventListener('click', () =>{
    if (powerOn) {
        powerOn=false;
        powerBtn.textContent='ON';
        displayText.textContent='';

        first_num='';
        second_num='';
        operator=null;
        
    } else {
        powerOn=true;
        powerBtn.textContent='OFF';

        displayText.textContent=0;

    }
});



numberBtn.forEach(button =>{
    button.addEventListener('click', (e) =>{
        const clickedNum=e.target.dataset.number;

        if(!powerOn){
            return
        }

        if (operator===null) {
            first_num+=clickedNum;
            displayText.textContent=first_num;
            
        }else{
            second_num+=clickedNum;
            displayText.textContent=second_num;
        }
    });
});


equalBtn.addEventListener('click', ()=>{

    if(!powerOn){
            return
        }



    if (first_num !=='' && second_num!=='' && operator!==null) {
        let result=operate(operator,first_num,second_num);
        displayText.textContent=result;

        first_num=result.toString();
        second_num='';
        operator=null;
    }

});


operatorBtn.forEach(button =>{



    if(!powerOn){
            return
        }


        
    button.addEventListener('click',(e) =>{
        if (first_num !== '') {
            operator=e.target.dataset.operator;
            displayText.textContent=operator;
            
        }

    });
});


clearBtn.addEventListener('click', () =>{
    first_num='';
    second_num='';
    operator=null;
    displayText.textContent=0;

});