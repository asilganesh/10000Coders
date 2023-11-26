var a="aaebcccfccaaadde"
var b=""


var i=0
while(i!=a.length){
      b=b+a[i]
    a=a.replaceAll(a[i],"")
  
}
console.log(b)