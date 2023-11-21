//greatest of three numbers

//arrow function
var greatest=(a,b,c)=>{
    
    if(a>b && a>c){
    console.log("Greatest of numbers "+a+","+b+","+c+" = "+a);
}
else if(b>a &&b>c){
        console.log("Greatest of numbers "+a+","+b+","+c+" = "+b);
}
else if(c>a &&c>b){
        console.log("Greatest of numbers "+a+","+b+","+c+" = "+c);
}
else{
    console.log("please enter 3 different numbers")
}
}

greatest(10,20,30)

//ananymous function

var greatestofthree=function(a,b,c){
    
    if(a>b && a>c){
    console.log("Greatest of numbers "+a+","+b+","+c+" = "+a);
}
else if(b>a &&b>c){
        console.log("Greatest of numbers "+a+","+b+","+c+" = "+b);
}
else if(c>a &&c>b){
        console.log("Greatest of numbers "+a+","+b+","+c+" = "+c);
}
else{
    console.log("please enter 3 different numbers")
}
}
greatestofthree(10,20,30)

//immidiate calling
var greatestof3=(function(a,b,c){
    if(a>b && a>c){
    console.log("Greatest of numbers "+a+","+b+","+c+" = "+a);
}
else if(b>a &&b>c){
        console.log("Greatest of numbers "+a+","+b+","+c+" = "+b);
}
else if(c>a &&c>b){
        console.log("Greatest of numbers "+a+","+b+","+c+" = "+c);
}
else{
    console.log("please enter 3 different numbers")
}
})(10,20,30)


