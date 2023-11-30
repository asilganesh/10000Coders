//**Remove Duplicates**: Write a function that removes duplicate elements from an array while preserving the original order.

function removeDuplicates(a){
    var c=[]
 
    for(i=0;i<a.length;){
           var b=[]
        for(j=0;j<a.length;j++){
            if(a[i]==a[j]){
                continue
            }
            else{
                b.push(a[j])
            }
        }
        c.push(a[i])
        a=b
    }
    console.log(c)
}
removeDuplicates([1,2,3,1,1,2,4,3,3])