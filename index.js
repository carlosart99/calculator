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

function evaluateExp(digits,operators){
  for(let i=0; i<operators.length; i++){
    if (operators[i]==='*' || operators[i]==='/'){
      digits[i] = operate(operators[i],digits[i],digits[i+1])      
      digits.splice(i+1,1);
      operators.splice(i,1);
      i=-1;
    }

  }

  for(let i=0; i<operators.length; i++){
    if (operators[i]==='+' || operators[i]==='-'){
      digits[i] = operate(operators[i],digits[i],digits[i+1])      
      digits.splice(i+1,1);
      operators.splice(i,1);
      i=-1;
    }
  }  

  return digits;
}
 
let digits = [], operators = [], actDigit='';
let digitOptions = ['0','1','2','3','4','5','6','7','8','9',',']
let operatorOptions = ['+','-','*','/']

const textArea = document.querySelector("textarea");
const resultsList = document.querySelector("#results-list");

document.addEventListener('click',function(e){
  if(e.target && digitOptions.includes(e.target.id)){
    actDigit+=e.target.id;
    textArea.value += e.target.id;
  }  
  else if (e.target && operatorOptions.includes(e.target.id)){
    textArea.value += " " + e.target.id + " ";
    digits.push(parseInt(actDigit));
    operators.push(e.target.id);    
    actDigit='';
  }
  else if (e.target && e.target.id === 'equal'){
    let resultElement = document.createElement('li'), result;
    digits.push(parseInt(actDigit));
    result = evaluateExp(digits,operators);
    resultElement.innerHTML = `<span>${textArea.value}</span> = <span>${result}</span>`
    resultsList.appendChild(resultElement);
    textArea.value='';
    digits = [], operators = [], actDigit='';    
  }
  else if (e.target && e.target.id === 'clear'){
    textArea.value='';
    digits = [], operators = [], actDigit='';    
  }  
})
