module.exports = function toReadable (number) {
    if (!number || number == 0){
        return 'zero';
    }
    theArray = number.toString().split("");
    let  theLength = theArray.length;
    let result = "";
    console.log(theLength);
      switch (theLength){
          case 1:
             result += oneIndex(number);
          break; 
  
          case 2:
              result =twoIndex(number);
          break;
  
          case 3:
              threeIndex(number);
          break;
      }
  
      function oneIndex(number){
        let stringOneIndex;
          switch (number){
              case 0:
                  stringOneIndex= "";
              break;
              case 1:
                stringOneIndex= "one";
              break;  
              case 2:
                  stringOneIndex= "two";
              break;
              case 3:
                  stringOneIndex= "three";
              break;
              case 4:
                  stringOneIndex= "four";
              break;
              case 5:
                  stringOneIndex= "five";
              break;
              case 6:
                  stringOneIndex= "six";
              break;
              case 7:
                  stringOneIndex= "seven";
              break;
              case 8:
                  stringOneIndex= "eight";
              break;
              case 9:
                  stringOneIndex= "nine";
              break;                  
          } 
          return stringOneIndex;
      }
  
      function twoIndex(number){
          let array = Array.from(String(number), Number);
          let stringTwoIndex;
          switch (array[0]){
              case 2:
                  stringTwoIndex= "twenty "+ oneIndex(array [1]);
                  break;
              case 3:
                  stringTwoIndex= "thirty "+ oneIndex(array [1]);
                  break;
              case 4:
                  stringTwoIndex= "forty "+ oneIndex(array [1]);
                  break;
              case 5:
                   stringTwoIndex= "fifty "+ oneIndex(array [1]); 
                   break; 
              case 6:
                  stringTwoIndex= "sixty "+ oneIndex(array [1]);
                  break;
              case 7:
                  stringTwoIndex= "seventy "+ oneIndex(array [1]);
                  break;
              case 8:
                  stringTwoIndex= "eighty "+ oneIndex(array [1]);
                  break;
              case 9:
                  stringTwoIndex= "ninety "+ oneIndex(array [1]);
                  break;
              case 0:
                  stringTwoIndex= oneIndex(array [1]);  
                  break;
              case 1:
                  switch(array[1]){
                    case 0:
                        stringTwoIndex = "ten";
                        break;
                    case 1:
                        stringTwoIndex = "eleven";
                        break;
                    case 2:
                        stringTwoIndex = "twelve";
                        break;
                    case 3:
                        stringTwoIndex = "thirteen";
                        break;
                    case 4:
                        stringTwoIndex = "fourteen";
                        break;
                    case 5:
                        stringTwoIndex = "fifteen";
                        break;
                    case 6:
                        stringTwoIndex = "sixteen"
                        break;
                    case 7:
                        stringTwoIndex = "seventeen"
                        break;
                    case 8:
                        stringTwoIndex = "eighteen"
                        break;
                    case 9:
                        stringTwoIndex = "nineteen";
                        break;
                  }
              break;
          }
          return stringTwoIndex;
      }
  
      function threeIndex(number){
          let array = Array.from(String(number), Number);
          
          result= oneIndex(array.shift()) +" hundred "+ twoIndex(array.join(""))
          console.log(array);
          console.log(parseInt(array.join("")))
      }
  
      return result.trim();
}
