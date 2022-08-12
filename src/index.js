  module.exports =  function check(str, bracketsConfig) {
  // your solution
  let bracketExample = {}
  let bracketOpen = [];
  let bracketDuple = [];
  let stek = [];
  for (let i = 0; i < bracketsConfig.length; i++) {
    bracketExample[bracketsConfig[i][1]]=bracketsConfig[i][0];
   if (bracketsConfig[i][0] != bracketsConfig[i][1]) {
    bracketOpen.push(bracketsConfig[i][0])
   } else {
    bracketDuple.push(bracketsConfig[i][0])
          } }

//console.log('bracketExample ',bracketExample)
//console.log('bracketOpen ', bracketOpen)
//console.log('bracketDuple ', bracketDuple)

  for (let i = 0; i < str.length; i++) {
  let symbol = str[i];
  //console.log('symbol ', symbol)
   if (bracketOpen.includes(symbol)) {
            //console.log('delaem push');
            stek.push(symbol);
          } else if (bracketDuple.includes(symbol)) {
                        if ((stek[stek.length - 1]) == symbol) {
                         // console.log("udalim duplet")
                          stek.pop();
                              } else {
                         // console.log('delaem push dupleta');
                          stek.push(symbol);
                        }
          } else {
              if (stek.length == 0) {
              //  console.log("stek pust")
                return false;
              }
    
            let symbolEnd = stek[stek.length - 1];
          //  console.log('symbolEnd')
            if (bracketExample[symbol] === symbolEnd) {
             // console.log('udaliem iz steka')
              stek.pop();
            } else {
              return false;
            }
          }
         
  }   
  //console.log('length stek', stek.length)
  return  stek.length === 0; 
 }


 //console.log(check('||', [['|', '|']]))