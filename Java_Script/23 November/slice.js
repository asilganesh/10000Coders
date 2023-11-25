var name="hello World"

console.log(name.slice(-120,30))

function sliceEx(a,b){
    
   //
    if(a>=0 && b>=0){

    let temp="";
    
    if(b>name.length){
        b=name.length
    }
    
    for(i=a;i<b;i++){
        temp=temp+name[i]
        
    }
    console.log(temp)
}
//
if(a>=0 && b==undefined){
    
      let temp="";
    
  
    
    for(i=a;i<name.length;i++){
        temp=temp+name[i]
        
    }
    console.log(temp)
    
}



//

   if(a<0 && b<0) {
    let temp="";
    if(a<-(name.length)){
        a=-(name.length)
    }
    
    for(i=name.length+a;i<name.length+b;i++){
        temp=temp+name[i]
    }
    
    console.log(temp)
    
    //
    
    if(a<0 && b==undefined){
         
    let temp="";
    if(a<-(name.length)){
        a=-(name.length)
    }
    
    for(i=name.length+a;i<name.length;i++){
        temp=temp+name[i]
    }
    
    console.log(temp)
    }
}

//
if(a<0 && b>=0){
    
    let temp=""
     if(b>name.length){
        b=name.length
    }
    for(i=0;i<b;i++){
        temp=temp+name[i]
    }
    console.log(temp)
}
//

}
sliceEx(-120,30)

