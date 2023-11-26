function rotationstring(a,b){
    var count=0
    a=a.split("")
    b=b.split("")
    a=a.sort()
    b=b.sort()
    if(a.length==b.length){
   for(i=0;i<a.length;i++){
       if(a[i]==b[i]){
           count=count+1
       }
   
   }
   if(count==a.length){
       console.log("true")
   }
       else{
           console.log(false)
       }
    }
    else{
        console.log(false)
    }
}
rotationstring('waterbottlee', 'lewaterbotte')