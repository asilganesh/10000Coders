//Distance between two points


function distance(a1,a2,b1,b2){
        
    //Distance between two points = Sqt((x2-x1)^2+(y2-y1)^2)
    //here i can wrtie as 
   var result=(((a2-a1)**2+(b2-b1)**2)**0.5);
   return result;
}
console.log(distance(1,2,3,4));
