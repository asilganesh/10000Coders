//**Find Common Elements**: Write a function that finds and returns the common elements between two arrays.


function CommonElements(a,b){
    var c=[]
   
    for(i=0;i<a.length;i++){
         var d=[]
        for(j=0;j<b.length;j++){
        if(a[i]==b[j]){
            c.push(b[j])
        }
        else{
            d.push(b[j])
        }
        }
         b=d
    }
   
    console.log(c)
}
CommonElements([1,1,2,3,4,5,],[3,4,5,8,9,1])