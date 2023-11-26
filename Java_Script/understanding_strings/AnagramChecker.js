function anagram(a,b){
    var count=0
    var temp=""
    if(a.length==b.length){
        for(i=0;i<a.length;i++){
         
            for(j=0;j<a.length;j++){
                if(a[i]==b[j]){
                    count=count+1
                    break;
                    } 
            }
        }
        if(count==a.length){
            console.log("It's a Anagram")
        }
        else{
            console.log("Not Anagram")
        }
    }
    else{
        console.log("Not a Anagram")
    }
    
    }
    anagram("care","race")
    