import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {

  constructor() { }

  ngOnInit() {
    var viewer = document.getElementById('viewer'), // Поле вывода
    equals = document.getElementById('equals'), // Равно (=)
    numbs = document.getElementsByClassName('num'), //Список цифр (0 - 9)
    ops = document.getElementsByClassName('ops'), // Список операторов
    clearAll = document.getElementById('clear'),
    theNum = "", // Текущая цифра
    oldNum = "", // Предыдущая цифра 
    resultNum: any, //Результат
    operator: any;

    // Если: Нажата кнопка. Получить значение этой кнопки
    for(let i = 0; i < numbs.length; i++){
      numbs[i].addEventListener('click', function(){
        if(resultNum != ""){
          theNum = this.getAttribute('data-num');
          resultNum = "";
        }else{
          theNum += this.getAttribute('data-num');
        }
        viewer.innerHTML = theNum;
      });
    }

    // Если: Нажат оператор. Отправить цифру в oldNum и сохранить оператор
    for(let i = 0; i < ops.length; i++){
      ops[i].addEventListener('click', function(){
        oldNum = theNum;
        theNum = "";
        operator = this.getAttribute('data-ops');
        equals.setAttribute('data-result', '');
      });
    }

    // Если: Нажато равно. Подщитать результат
    equals.addEventListener('click', function(){
      // Конвертирование с строки в флоат
      let TheoldNum = parseFloat(oldNum);
      let ThetheNum = parseFloat(theNum);

      // Выбор операции
      switch(operator){
        case "plus":
          resultNum = TheoldNum + ThetheNum;
          break;
        case "minus": 
          resultNum = TheoldNum - ThetheNum;
          break;
        case "times": 
          resultNum = TheoldNum * ThetheNum;
          break;
        case "divided by": 
          resultNum = TheoldNum / ThetheNum;
          break;
        // Если нажато равно без операции, вывести число и продолжить 
        default:
            resultNum = ThetheNum;
      }
      if(!isFinite(resultNum)){
        if(isNaN(resultNum)){
          resultNum = "you broke it!";
        }else {
          resultNum = "Look at what you've done"
        }
      }

      // Вывод полученого
      viewer.innerHTML = resultNum;
      equals.setAttribute('data-result', resultNum);
    });

    // Если: Нажата кнопка очистить - очистить все
    clearAll.addEventListener('click', function(){
      oldNum = '';
      theNum = '';
      viewer.innerHTML = "0";
      equals.setAttribute("data-result", resultNum);
    });
  }

}
