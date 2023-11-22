// fetching vowels from a string at even and odd places

function vowelEO(c){
    var count="";
    var count1="";
    for(i=0;i<c.length;i++){
        if(i%2==0 && (c[i]d=="a" || c[i]=="e" || c[i]=="i" ||c[i]=="o" ||c[i]=="u")){
            count=count+c[i];
           
        }
     
    }
    console.log("Vowels at even positions : "+count)
    console.log("-----------------------------------")
    
     for(i=0;i<c.length;i++){
        if(i%2!=0 && (c[i]=="a" || c[i]=="e" || c[i]=="i" ||c[i]=="o" ||c[i]=="u")){
            count1=count1+c[i];
           
        }
     
    }
    console.log("Vowels at odd positions : "+count1)
    
}
vowelEO("aeiou");