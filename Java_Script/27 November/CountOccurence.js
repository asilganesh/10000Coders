var a=["hello","hello","hi","bye","hello","hi","hello1"]


var i=0
while(i<a.length){
    
    var count=0
    var b=[]
    for(j=0;j<a.length;j++){
        if(a[i]==a[j]){
            count=count+1
        }
        else{
            b.push(a[j])
        }
    }
    console.log(a[i]+" : "+count+" times")
    a=b
}