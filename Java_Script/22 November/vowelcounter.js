// //Vowel Counter
function vowelcounter(a){
    var count=0;
    for(i=0;i<a.length;i++){
        if(a[i]=="a" || a[i]=="e" || a[i]=="i" ||a[i]=="o" ||a[i]=="u"){
            count=count+1
        }
        
    }
    console.log("Total Vowels : "+count)
    
    
}
vowelcounter("The quick brown fox jumps over the lazy dog");