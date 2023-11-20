//Write a program to calculate salary of an employee given his basic pay (to be entered by the user), HRA = 10 per cent of basic pay, TA = 5 per cent of basic pay. Define HRA and TA as constants and use them to calculate the salary of the employee.



function sal(bp){
    
    const hra=0.1;  //here hra is const i.e 10%
    const ta=0.05;  //here ta is const i.e 5%
    
    var salary=bp+hra*bp+ta*bp;   //gross al = basicpay +hra+Ta
    return salary;
}
console.log(sal(10000));