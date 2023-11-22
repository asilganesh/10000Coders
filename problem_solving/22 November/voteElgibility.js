//Write a program to determine whether a person is eligible to vote.

var age=200;

if(age<18){
    console.log("Not Eligible to Vote")
}
if(age>=18 && age <100){
    console.log("Eligible to Vote")
}
if(age>100){
    console.log("person may not exist")
}