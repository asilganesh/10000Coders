
//Calculating length using for in
function len(a){
    var count=0
    
    for(i in a){
        count++
    }
    console.log(count)
}
len([1,2,3,4,5])


//Calculating length using for of

function len(a){
    var count=0
    
    for(i of a){
        count++
    }
    console.log(count)
}
len([1,2,3,4,5])

