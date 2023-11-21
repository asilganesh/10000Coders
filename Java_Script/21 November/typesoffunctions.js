//Naming Function
function even(){
    
    for(i=0;i<=10;i=i+2){
        console.log(i)
    }
}
even();


//Arrow Function
var hello=()=>{
      for(i=0;i<=10;i=i+2){
        console.log(i)
}
}
hello();


//ananymous function
var hello1=function(){
     for(i=0;i<=10;i=i+2){
        console.log(i)
}
}

hello1();

//immidiately invoking function
var v=(function(){
     for(i=0;i<=10;i=i+2){
        console.log(i)
}
})()