function oddvowels(a){
    var count="";
    for(i=0;i<a.length;i++){
        i%2!=0 && (a[i]=="a" || a[i]=="e" || a[i]=="i" ||a[i]=="o" ||a[i]=="u") ? count=count+a[i]:'continue';
    }
    console.log("Vowels at odd positions : "+count)
    
}

oddvowels("The quick brown fox jumps over the lazy dog");