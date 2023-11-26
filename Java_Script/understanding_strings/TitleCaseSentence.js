function CFl(a){


    var count="";
    
    for(i=0;i<a.length;i++){
        if(a[i-1]==undefined){
            count=count+a[i].toUpperCase()
            i++
        }
        if(a[i-1]==" "){
            count=count+a[i].toUpperCase()
            
        }
      
        
        else{
            count=count+a[i]
        }
    }
    console.log(count)
    }
    CFl("my self ganesh asil")
    