//**Array Chunking**: Write a function that divides an array into smaller arrays of a specified size.


function dividearray(a,size){
    while(a.length!=0){
        
    let b=[]
    b=a.splice(0,size)
    if(b.length==size){
    console.log(b)
    }
    }
    }
    dividearray([1,2,3,4,5,6,7,8,9,10,11],2)