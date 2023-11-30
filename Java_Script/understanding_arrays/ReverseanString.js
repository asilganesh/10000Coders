// **Reverse an Array**: Write a function that reverses the elements in an array without using the built-in `reverse()` method.

function reverseanArray(a){
    var b=[]
    for(i=a.length-1;i>=0;i--){
        b.push(a[i])
        
    }
    console.log(b)
}
reverseanArray([1,2,3,4,5])
