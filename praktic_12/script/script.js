  main = document.querySelector('.grid-main');
  action = document.querySelectorAll('.action');
  text = document.querySelector('.result-text');
  res = document.querySelector(".result-res")
  let num = "";
  let numStr1 = "";
  let numStr2 = "";
  let operator = "";
  let result;
  // let a = '';
  // let ele = "";
  const equal = document.querySelector('.column-2');
  let del = document.querySelector('.del');

  del.addEventListener('click' , function(event){
    res.innerText = "";
    text.innerText = "";
    a = "";
    ele = "";
    operator="";
    result = "";
    numStr1 = "";
    numStr2 = "";
  })
  
  function numbers(number){
     num += number;
     text.innerText = `${num}`;
  };

  equal.addEventListener("click",function(event){
    for (let i = 0; i < num.length; i++) {
      if(num[i] == "*" || num[i] == "/" || num[i] == "+" || num[i] == "-"){
        operator = num[i];
        for (let j = 0; j < i; j++) {
          numStr1 += num[j];
          
        }
        console.log(numStr1);
        for (let l = i+1; l < num.length; l++) {
          numStr2 += num[l];   
        }
      }
    }
    numStr1 = parseFloat(numStr1);
    numStr2 = parseFloat(numStr2);
    switch (operator) {
      case "+":
        result = (numStr1 + numStr2);
        break;
      case "-":
        result = (numStr1 - numStr2);
        break;
      case "*":
        result = (numStr1 * numStr2);
        break;
      case "/":
        result = (numStr1 / numStr2);
        break;
    }
    res.innerText =`=${result}`;
    num = "";
    numStr1="";
    numStr2 = "";
  });
  
main.addEventListener("click",function(event){
    
    if(event.target.closest('.action') || event.target.closest('.grid-main-item') && !event.target.closest('.column-2') && !event.target.closest('.gray'))
    {
    numbers(event.target.innerText);
    res.innerText = "";
  };
  if(event.target.closest('.action') || event.target.closest('.grid-main-item') && !event.target.closest('.column-2') && !event.target.closest('.gray') && !event.target.closest('.del'))
    {
      a = event.target.innerText;
      // console.log(a,ele);
      let a;
      console.log(a);
      let ele;
      ele += a;
    text.innerText = `${ele,a}`;

  }
  });
  const checkBox = document.getElementById("checkbox");
  let wrapper = document.querySelector('.wrapper')
  checkBox.addEventListener("change", function() {
    if (checkBox.checked) {
      console.log("lala");
      wrapper.classList.toggle('white-teme')
    } 
    else {
      wrapper.classList.toggle('white-teme')
    }
  });


