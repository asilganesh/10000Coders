//counting Vowels and Consonants

function vandC(a){
    var vowelcount=0;
    var consonantcount=0;
    for(i=0;i<a.length;i++){
        if(a[i]=="a"||a[i]=="e"||a[i]=="i"||a[i]=="o"||a[i]=="u"){
            vowelcount=vowelcount+1;
            
        }
        else{
            consonantcount=consonantcount+1
        }
    }
    console.log("Vowels : "+vowelcount)
    console.log("Consonants : "+consonantcount)
    
}
vandC("hello world")