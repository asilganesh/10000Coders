function longestword(a,b){

    var c=a.split(" ")
    var d=b.split(" ")
    
    if(c.length==d.length){
        console.log("First Sentence has longest words")
    }
    else if(c.length>d.length){
        console.log("First Sentence has longest words")
    }
    else{
            console.log("Second Sentence has longest words")
    }
    }
    longestword("the quick brown fox jumps over the lazy dog","the quick brown fox jumps over the lazy dog again")