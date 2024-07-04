

// sum of 2 numbers by using functions
function demo(a, b) {
    return a + b;
  }
  console.log(demo(6 ,3));
//   sub ocf 2 numbers using functions
  function demo1(b, c) {
    return b - c;
  }
  
  console.log(demo1(5, 3));
//   multiplication
  function demo2(d, e) {
    return d * e;
  }
  
  console.log(demo2(5, 3));
//   division
  function demo3(f, g) {
    return f / g;
  }
  
  console.log(demo3(5, 3));
  
  ////////////////////////////////////////////////////////////////////
//   square of 2 numbers
  function square(sqa, sqb) {
    return sqa ** sqb;
  }
  
  console.log(square(3, 4));
  
  function square1(num) {
    let sqvalue = num ** 2;
    return sqvalue;
  }
  console.log(square1(2));
  ///////////////////////////////////////////////////////////////////
//   find the greatest numher
  function highest(x, y) {
    return x > y ? x : y;
  }
  console.log(highest(10, 20));
  
  ///////////////////////////////////////////////////////////////
  /**
   *
   *  {Write a javascript function which takes three arguments  (amount , rate of interest, no of years ) returns the total value of interest}
   *
   */
  
  function interest(p, r, t) {
    let interest = (p * r * t) / 100;
    let total = p + interest;
    return total;
  }
  console.log(interest(10000, 10, 3));
  
  
  
  function demo(a,b){
   
  return a*b;
  
  }
  console.log(demo(3,4))