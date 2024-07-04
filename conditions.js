

// 1. What will be the output of this code:
if (5 > 10) {
    console.log('5 is greater than 10');
  } else {
    console.log('5 is less than or equal to 10');
  }
  
  // ans 5 is less than or equal to 10
  
  // 1. What will be the output of this code:
  
  if (NaN === NaN) {
    console.log('NaN is equal to NaN');
  } else {
    console.log('NaN is not equal to NaN');
  }
  // ans NaN is not equal to NaN;
  
  // 1. What will be the output of this code:
  
  if (!null) {
    console.log('null is truthy');
  } else {
    console.log('null is falsy');
  }
  // ans null is truthy;
  // 1. What will be the output of this code:
  
  if (0 === '') {
    console.log('0 is equal to empty string');
  } else {
    console.log('0 is not equal to empty string');
  }
  // ans 0 is not equal to empty string;
  // 1. What will be the output of this code:
  
  if (true && false) {
    console.log('true and false is true');
  } else {
    console.log('true and false is false');
  }
  // ans true and false is false
  
  // 1. What will be the output of this code:
  
  if (false || true) {
    console.log('false or true is true');
  } else {
    console.log('false or true is false');
  }
  // ans false or true is true;
  
  // 7. What will be the output of this code:
  if (!false && true) {
    console.log('not false and true is true');
  } else {
    console.log('not false and true is false');
  }
  // ans not false and true is true;
  
  // 1. What will be the output of this code:
  if (5 === '5') {
    console.log('5 is equal to string 5');
  } else {
    console.log('5 is not equal to string 5');
  }
  // ans 5 is not equal to string 5;
  
  // 1. What will be the output of this code:
  
  if (undefined == null) {
    console.log('undefined is equal to null');
  } else {
    console.log('undefined is not equal to null');
  }
  // ans undefined is equal to null;
  
  // 1. What will be the output of this code:
  
  if (typeof [] === 'object') {
    console.log('Array is an object');
  } else {
    console.log('Array is not an object');
  }
  // ans Array is an object
  
  // For Loops:
  
  // 1. What will be the output of this code:
  
  // for (var i = 0; i < 5; i++) {
  //   console.log(i);
  // }
      // 0
      // 1
      // 2
      // 3
      // 4
  
  // 1. What will be the output of this code:
  
  // for (var i = 0; i < 5; i += 2) {
  //   console.log(i);
  // } 
  //     0
  //     2
  //     4
  
  // 1. What will be the output of this code:
  
  // for (var i = 5; i >= 0; i--) {
  //   console.log(i);
  // }
  //     5
  //     4
  //     3
  //     2
  //     1
  //     0
  
  // 1. What will be the output of this code:
  
  // for (var i = 0; i < 5; i += 3) {
  //   console.log(i);
  // }
  //     0
  //     3
  
  // 1. What will be the output of this code:
  
  for (var i = 0; i > 5; i++) {
    console.log(i);
  }
      // it is false(0 is not greater than 5) so it doesnt print any value
  
  // 1. What will be the output of this code:
  
  for (var i = 5; i <= 0; i--) {
    console.log(i);
  }
      // it is also false so doesnt print any value;
  
  // 1. What will be the output of this code:
  
  // for (var i = 0; i < 10; i += 4) {
  //   console.log(i);
  // }
  //     0
  //     4
  //     8
  // 1. What will be the output of this code:
  
  // for (var i = 0; i < 5; i++) {
  //   if (i === 3) break;
  //   console.log(i);
  // }
  //     0
  //     1
  //     2
  // 1. What will be the output of this code:
  
  for (var i = 0; i < 5; i++) {
    if (i === 2)continue;
    console.log(i);
  }
    // 0
    // 1
    // 3
    // 4
    
  
  // 1. What will be the output of this code:
  // for(var i=0;i<5;i++){
  //   if(i===1)return;
  //   console.log(i);
  // }
  //  0