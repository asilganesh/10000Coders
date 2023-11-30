//**Sum of Array Elements**: Write a function that calculates the sum of all the elements in an array.


function SumOfArray(a){
    var sum=0;
    for(i=0;i<=a.length-1;i++){
        sum=sum+a[i]
    }
    
    console.log(sum)
}
SumOfArray([1,2,3,4,5,6,7,8,9,10])