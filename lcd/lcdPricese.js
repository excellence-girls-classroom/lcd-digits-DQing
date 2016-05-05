
function  printText(input) {
    var numStrings=numberToString(input);
    var lcdNumbers=loadDigits();
    var number=outputNumber(numStrings,lcdNumbers);
    console.log(number);
}

function numberToString(number) {
   return  number.toString();
}

function outputNumber(numStrings,lcdNumbers) {
    var result='';
    for(var i = 0;i < numStrings.length; i++){
      var it= isEqual(numStrings[i],lcdNumbers);
       if(it){
           result+=it;
       }
   }
    return result;
}
function isEqual(numString, lcdNumbers) {
    for (var i = 0;i < lcdNumbers.length;i ++){
       if(parseInt(numString) === (lcdNumbers[i].number)[0]){
           return (lcdNumbers[i].number)[1];
       }
    }
}