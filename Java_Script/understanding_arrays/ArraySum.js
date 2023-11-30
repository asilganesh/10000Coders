//**Array Sum Pairs**: Given an array of numbers and a target sum, find all pairs of numbers in the array that add up to the target.

function TwoSumProblem(a,target){
    var sum=0;
    // for(k=0;k<a.length;k++){
    //     sum=sum+a[k]
    // }
    // if(target==sum){
    for(i=0;i<a.length;i++){
        for(j=0;j<a.length;j++){
            var b=[]
            if(a[i]+a[j]==target){
              b.push(a[i])
              b.push(a[j])
              console.log(b)
            }
        }
    }
    // }
}
TwoSumProblem([1,2,3,4,5],9)