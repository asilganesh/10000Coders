//Write a program to calculate simple interest and compound interest.

//Simple Intrest

function SI(principle,RateOfinterest,time){
    
    var simpleIntrest=(principle*RateOfinterest*time)/100
    return simpleIntrest;
  }
  console.log(SI(1000,5,3))

  //Coumpound Intrest


  function CI(principle,RateOfinterest,time){
    
    var compoundintrest=principle*((1+RateOfinterest/100)**time)
    return compoundintrest;
  }
  console.log(CI(1000,10,2))