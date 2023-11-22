// concationg vowels
function vowel(b){
    var count="";
    for(i=0;i<b.length;i++){
        if(b[i]=="a" || b[i]=="e" || b[i]=="i" ||b[i]=="o" ||b[i]=="u"){
            count=count+b[i]
        }
        
    }
    console.log("concating vowels : "+count)
    
    
}
vowel("The quick brown fox jumps over the lazy dog");