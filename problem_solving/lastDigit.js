// write a function to return last digit of the number.


//defined function lastDigit with parameter
function lastDigit(num){
    
    var rem=num%10;  //performing division and stores the remainder in rem
    return rem;      //returns value
    
}
console.log(lastDigit(123456));   //calling function with passing number as argument