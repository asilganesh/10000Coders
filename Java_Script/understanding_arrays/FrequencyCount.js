
// **Array Frequency Count**: Write a function that counts the frequency of each element in an array and returns an object with the counts.


function FrequencyCount(a){


    for(i=0;i<a.length;){
        var b=[]
        var count=0;
        for(j=0;j<a.length;j++){
            if(a[i]==a[j]){
                count=count+1
            }
            else{
                b.push(a[j])
            }
        }
        console.log(`${a[i]} : ${count} times`)
        a=b
    }
    }
    FrequencyCount([1,2,3,4,3,2,2,2,2,1,1])