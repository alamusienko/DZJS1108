//plus
 function calcResultPlus() {
    var num1, num2, Result;
    num1 = parseInt(document.getElementById('n1').value);
    
    num2 = parseInt(document.getElementById('n2').value);
    
    Result = num1 + num2;
     
    document.getElementById('outCalc').innerHTML = 'CalcResult: ' + Result;
  }
  
  //Minus
  function CalcResultMinus() {
    var num1, num2, Result;
    num1 = document.getElementById('n1').value;
    num1 - parseInt(num1);
    
    num2 = document.getElementById('n2').value;
    num2 - parseInt(num2);
    
    Result = num1 - num2;
    
    document.getElementById('outCalc').innerHTML='CalcResult: ' + Result;
  }
  
  //Multiplication
  function CalcResultMultiplication() {
    var num1, num2, result;
    num1 = document.getElementById('n1').value;
    num1 - parseInt(num1);
    
    num2 = document.getElementById('n2').value;
    num2 - parseInt(num2);    
   
    result = num1 * num2;
    
    document.getElementById('outCalc').innerHTML='CalcResult: ' + result;
  }
  
  //Division
  function CalcResultDivision() {
    var num1, num2, result;
    num1 = document.getElementById('n1').value;
    num1 - parseInt(num1);
    
    num2 = document.getElementById('n2').value;
    num2 - parseInt(num2);
    
    result = num1 / num2;
    
    document.getElementById('outCalc').innerHTML='CalcResult: ' + result;
  }
  
  function MaxNumber() {
    var num1, num2, num3, result;
    num1 = document.getElementById('n1').value;
    num1 - parseInt(num1);
    
    num2 = document.getElementById('n2').value;
    num2 - parseInt(num2);
    
    num3 = document.getElementById('n3').value;
    num3 - parseInt(num3);
    
    //result = Math.max(num1,num2,num3);
    if (num1 >= num2 && num1 >= num3){
        result = num1;}
        else if (num2 >= num1 && num2 >= num3){
            result = num2;}
        else if (num3 >= num1 && num3 >= num2){
            result = num3;}

    document.getElementById('outMaxNumber').innerHTML='MaxNumber: ' + result;
  }
  
  function showSeason() {
    document.getElementById("p1").style.display = "block";
    document.getElementById("b1").style.display = "block";
    document.getElementById("outSeason").style.display = "block";
    document.getElementById("p2").style.display = "none";
    document.getElementById("p3").style.display = "none";
    document.getElementById("p2").style.display = "none";
    document.getElementById("b2").style.display = "none";
    document.getElementById("b3").style.display = "none";
    document.getElementById("b4").style.display = "none";
    document.getElementById("b5").style.display = "none";
    document.getElementById("b6").style.display = "none";
    document.getElementById("outMaxNumber").style.display = "none";
    document.getElementById("outCalc").style.display = "none";
  }
  
  function showMaxNumber() {
    document.getElementById("p1").style.display = "block";
    document.getElementById("p2").style.display = "block";
    document.getElementById("p3").style.display = "block";
    document.getElementById("b2").style.display = "block";
    document.getElementById("outSeason").style.display = "block";
    document.getElementById("p2").style.display = "none";
    document.getElementById("b1").style.display = "none";
    document.getElementById("b3").style.display = "none";
    document.getElementById("b4").style.display = "none";
    document.getElementById("b5").style.display = "none";
    document.getElementById("b6").style.display = "none";
    document.getElementById("outSeason").style.display = "none";
    document.getElementById("outCalc").style.display = "none";
  }

  function showCalc() {
    document.getElementById("p1").style.display = "block";
    document.getElementById("p2").style.display = "block";
    document.getElementById("b3").style.display = "block";
    document.getElementById("b4").style.display = "block";
    document.getElementById("b5").style.display = "block";
    document.getElementById("b6").style.display = "block";
    document.getElementById("outCalc").style.display = "block";
    document.getElementById("p3").style.display = "none";
    document.getElementById("b1").style.display = "none";
    document.getElementById("b2").style.display = "none";
    document.getElementById("outMaxNumber").style.display = "none";
    document.getElementById("outSeason").style.display = "none";
  }
  
  function Season() {
    var num1, Result;
    num1 = document.getElementById('n1').value;
    num1 - parseInt(num1);
       
    function SeasonDecision (month) {
      if (month == 12 || month <= 2 && month > 0) 
      {
          return 'Winter';
      }
      else if (month >= 3 && month <= 5) {
        console.log(month);
        return 'Spring';
      }
      else if (month >= 6 && month <= 8) {
          return 'Summer';
      }
      else if (month >= 9 && month <= 11) {
         return 'Autumn';
      }
      else {
         return 'There are 12 months in a season';
      }
    }
      Result = SeasonDecision(num1);
    
      document.getElementById('outSeason').innerHTML= 'Season: ' + Result;
    }
  
 
  
  //version2
  //let Season promt ('Enter the serial number of the month');
  //if (Season = null) {
  //  document.getElementById("demo").innerHTML = "Enter the serial number of the month";
  //}
  //if (Season = 12 || Season = 1 || Season = 2) {
  //  document.getElementById("demo").innerHTML = "Winter";
  //}
  //}
  //if (Season = 3 || Season = 4 || Season = 5) {
  //  document.getElementById("demo").innerHTML = "Spring";
  //}
  //}
  //if (Season = 6 || Season = 7 || Season = 8) {
  //  document.getElementById("demo").innerHTML = "Summer";
  //}
  //}
  //if (Season = 9 || Season = 10 || Season = 11) {
  //  document.getElementById("demo").innerHTML = "Autumn";
  //}