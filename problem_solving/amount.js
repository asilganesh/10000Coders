// write a code to calculate the Amount

//Created function amount with 4 parameters
function amount(ten, five, two, one) {

  var a = ten * 10;  //multiplies value in ten with 10
  var b = five * 5;  //multiplies value in five with 5
  var c = two * 2;   //multiplies value in two with 2
  var d = one * 1;   //multiplies value in one with 1

  var count = a + b + c + d;  //sums all the values and stores in count
  return count;                //returns value in count
}
console.log(amount(100, 50, 20, 10));   // calling function with passing arguments
