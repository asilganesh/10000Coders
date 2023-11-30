// **Filter Even Numbers**: Write a function that filters out all even numbers from an array and returns a new array with only the even numbers.


function evenNumbers(a){
    var b=[]
    for(i=0;i<=a.length-1;i++){
        if(a[i]%2==0){
            b.push(a[i])
            
        }
    }
    console.log(b)
}
evenNumbers([1,2,3,4,5,6,7,8,9,10])


