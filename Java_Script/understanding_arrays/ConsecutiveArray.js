//**Consecutive Array Elements**: Write a function that checks if an array contains consecutive numbers (in any order).



function ConsecutiveArray(a){


    for(i=0;i<a.length-1;i++){
        if(a[i+1]!=a[i]+1)
        console.log(a[i]+1)
    }
    }
    ConsecutiveArray([1,2,4,5,7,9])