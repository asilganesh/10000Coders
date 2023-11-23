//A company decides to give bonus to all employees on occasion of dewali of 5%for male and 10% for female if employee salary is less than 10000 then they will get 2% bones extra. calculate the bonus that has given to the employees and total salary with bonus?


function Bonus(gender,sal){
    var bonus=0;
    if((gender=="male" ||gender=="m") && sal<10000){
        
        bonus=Number(sal*7/100);
        console.log("Bonus : "+bonus)
        console.log("Sal with bonus : "+(sal+bonus))
       
    }
     if((gender=="male" ||gender=="m") && sal>=10000){
        
        bonus=Number(sal*5/100);
        console.log("Bonus : "+bonus)
        console.log("Sal with bonus : "+(sal+bonus))
       
    }
      if((gender=="female"  || gender=="f" ) && sal<10000){
        
        bonus=Number(sal*12/100);
        console.log("Bonus : "+bonus)
        console.log("Sal with bonus  : "+(sal+bonus))
       
    }
     if((gender=="female"  || gender=="f" ) && sal>=10000){
        
        bonus=Number(sal*10/100);
        console.log("Bonus : "+bonus)
        console.log("Sal with bonus : "+(sal+bonus))
       
    }
    
    
}
var gender=prompt("Enter Gender : ")
var sal=+prompt("Enter Sal : ")

Bonus(gender,sal);

