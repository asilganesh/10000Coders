//Greatest of Three Numbers

function GTN(a,b,c){
    
    if(a>b && a>c){
        console.log("Greatest of "+a+","+b+","+c+" : "+a)
    }
      
    if(b>a && b>c){
        console.log("Greatest of "+a+","+b+","+c+" : "+b)
    }
      
    if(c>a && c>b){
        console.log("Greatest of "+a+","+b+","+c+" : "+c)
    }
    
}
GTN(10,20,30)