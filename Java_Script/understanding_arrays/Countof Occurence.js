 // **Count Occurrences**: Write a function that counts the number of times a specific element appears in an array.

 function CountOccurence(a){
    j
    for(i=0;i<a.length;){
  var b=[]
       var count=0;
        for(var j=0;j<a.length;j++){
            if(a[i]==a[j]){
                count=count+1
            }
            else{
                b.push(a[j])
                
            }
        }
       
        console.log(a[i]+" : "+count+" times")
        a=b
    }
    
}
CountOccurence([1,2,3,3,3,2,2,1,1,1,])