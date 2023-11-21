function factorial(a){
    var count=1;
    for(i=a;i>=1;i--){
        count=count*i
        
    }
    console.log(count)
}
factorial(5);


//arrow function

var fact=(a)=>{
      var count=1;
    for(i=a;i>=1;i--){
        count=count*i
        
    }
    console.log(count)
}
fact(5)

//anonymus function

var factorrial=function(){
     var count=1;
    for(i=a;i>=1;i--){
        count=count*i
        
    }
    console.log(count)
}
factorial(5)

//immediate invocation

var factorial=(function(a){
     var count=1;
    for(i=a;i>=1;i--){
        count=count*i
        
    }
    console.log(count)
})(5)