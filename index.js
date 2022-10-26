function add(a,b){return a + b;}

function subtract(a,b){return a - b;}

function multiply(a,b){return a * b;}

function divide(a,b){return a / b;}

function operate(operator,a,b){
    a = parseInt(a);
    b = parseInt(b);
    if (operator === '+'){return add(a,b)}
    else if (operator === '-'){return subtract(a,b)}
    else if (operator === '*'){return multiply(a,b)}
    else if (operator === '/'){return divide(a,b)}
}

function evaluateExp(exp){
    let result;
    if (exp.indexOf('/') != -1 || exp.indexOf('*') != -1){
        expElements = exp.split(/[+-]/);
        for(let i=0; i<expElements.length; i++){
            if (expElements[i].includes('/') && expElements[i].includes('*')){
                let operator = '*', remove = '/';
                if (expElements[i].indexOf('/') < expElements[i].indexOf('*')){
                    operator = '/';  
                    remove ='*';                  
                }
                expElements = expElements[i].split(remove)
                components = expElements[0].split(operator);
                result = operate(operator,parseInt(components[0]),parseInt(components[1]));
                exp = exp.replace(expElements[0],String(result));                
                console.log(exp);
            }
            else if (expElements[i].includes('/') || expElements[i].includes('*')){
                let operator;
                if (expElements[i].includes('/')){operator='/'}
                else {operator='*'};
                components = expElements[i].split(operator);
                result = operate(operator,parseInt(components[0]),parseInt(components[1]));
                exp = exp.replace(expElements[i],String(result));
                console.log(exp);
            }                    
        }
    }
    else if (exp.indexOf('+') != -1 || exp.indexOf('-') != -1){
        if (exp.includes('+') && exp.includes('-')){
            let operator = '+', remove = '-';
            if (exp.indexOf('-') < exp.indexOf('+')){
                operator = '-';  
                remove ='+';
            }
            expElements = exp.split(remove)
            components = expElements[0].split(operator);
            result = operate(operator, parseInt(components[0]),parseInt(components[1]));
            exp = exp.replace(expElements[0],String(result));                
            console.log(exp);
        }    
        else if (exp.includes('-') || exp.includes('+')){
            let operator;
            if (exp.includes('-')){operator='-'}
            else {operator='+'};
            components = exp.split(operator);
            result = operate(operator,parseInt(components[0]),parseInt(components[1]));
            exp = exp.replace(exp,String(result));
            console.log(exp);
        } 
    }
    if (exp.match(/[+*/-]/)){
        evaluateExp(exp);
    }
    else{
        return exp;
    }
}

console.log(evaluateExp("8+2-3+5*2/7"))

const input = document.querySelector("input");
const result = document.querySelector("#result");

input.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    expresion = input.value;
    expresion=expresion.replace('=','');
    expresion=expresion.replaceAll(' ','');
    console.log(typeof expresion)
    if (expresion.includes('+')){
        expresion = expresion.split('+');
        result.textContent = operate('+',expresion[0],expresion[1]);
    }
    input.value = "";
  }
});
 