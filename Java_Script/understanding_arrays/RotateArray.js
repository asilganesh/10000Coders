// **Rotate Array**: Write a function that rotates the elements of an array to the right by a given number of positions.


function RotateArray(a){
   let b=[]
   let n=3
   let j=0
   for(i=0;i<a.length;i++){
       
        if(a[i+n]==undefined){
        b.push(a[j])
     j++
    }
    else{
       b.push(a[i+n])
    }
   }
   console.log(b)
   }
   RotateArray([1,2,3,4,5])