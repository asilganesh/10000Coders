

function voting(age){
    
    if(age>=18){
        console.log("Your are Eligible for Voting")
    }
    else{
        console.log("Your are Eligilbe for voting after "+Number(18-age)+" Years")
    }
    
}
var age=+prompt("Please Enter your Age : ")
voting(age);