//**Array Difference**: Write a function that returns the elements that are unique to each array among multiple arrays.


function UniqueArrays(a,b,c){

    let arr1=[]
    let arr2=[]
    let arr3=[]
    
    for(i=0;i<a.length;i++){
        var count=0
        for(j=0;j<b.length;j++){
            
            if(a[i]!=b[j]){
                count=count+1
            }
            if(count==b.length){
                arr1.push(a[i])
            }
            
        }
    }
    for(i=0;i<b.length;i++){
        var count=0
        for(j=0;j<c.length;j++){
            
            if(b[i]!=c[j]){
                count=count+1
            }
            if(count==c.length){
                arr2.push(b[i])
            }
            
        }
    }
    for(i=0;i<a.length;i++){
        var count=0
        for(j=0;j<c.length;j++){
            
            if(a[i]!=c[j]){
                count=count+1
            }
            if(count==c.length){
                arr3.push(a[i])
            }
            
        }
    }
    console.log(arr1)
    console.log(arr2)
    console.log(arr3)
    
    }
    UniqueArrays([1,2,3,4],[3,4,5,6,7],[7,8,9,0])
    
    
    
