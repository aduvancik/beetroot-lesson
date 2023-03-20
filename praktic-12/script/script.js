  main = document.querySelector('.grid-main');
  action = document.querySelectorAll('.action');
  let num = "";
  function actionLog(operator){
    console.log(operator);
  };
  function numbers(number){
     num =+ number;
    console.log(num);
  };

  main.addEventListener("click",function(event){
    
    if(event.target.closest('.action')){
      actionLog(event.target.innerText);
    }

    else if(!event.target.closest('.action') && event.target.closest('.grid-main-item') && !event.target.closest('.column-2'))
    numbers(event.target.innerText);
    // let num =+ event.target.innerText;
    // console.log(num);
  });
