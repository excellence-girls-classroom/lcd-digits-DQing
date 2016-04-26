/**
 * Created by douqing on 16-4-23.
 */

function  printText(input) {
    var numStrings=numberToString(input);//将数字转换为字符串
    var lcdNumbers=loadDigits();//将数字的lcd图案传入
    var number=outputNumber(numStrings,lcdNumbers);//图案输出
    console.log(number);
}

function numberToString(number) {
   return  number.toString();
}

function outputNumber(numStrings,lcdNumbers) {
    var result='';
    for(var i = 0;i < numStrings.length; i++){
      var it= isEqual(numStrings[i],lcdNumbers);//返回数字字符串中的每一个数字的图案
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