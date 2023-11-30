// **Find Maximum Value**: Write a function that finds the maximum value in an array of numbers.

function maxValue(a){
    
    var largest=0;
    for(i=0;i<=a.length-1;i++){
        
        if(largest<=a[i]){
            largest=a[i]
        }
    }
    console.log(largest)
    
}
maxValue([10,40,50,70,90])