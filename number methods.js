// // check how isNaN works in different scenario
// // 1. When the value is a number:
// isNaN(123); // false
// isNaN(0); // false
// isNaN(-1.23); // false

// // 2. When the value is NaN:
// isNaN(NaN); // true
// isNaN(Number.NaN); // true
// isNaN(0 / 0); // true

// // . When the value is a string:

// isNaN("123"); // false (can be converted to a number)
// isNaN("Hello"); // true (cannot be converted to a number)
// isNaN(""); // false (empty string is coerced to 0)

// // 2.types of coercion
// Type Coercion refers to the process of automatic or implicit conversion of values from one data type to another. 
// This includes conversion from Number to String, String to Number, Boolean to Number, etc.
//  when different types of operators are applied to the values.

// //  types
// Number to String Conversion
// String to Number Conversion
// Boolean to Number
// The Equality Operator

function generateOTP(length) {
    let otp = '';
    const digits = '0123456789';
  
    for (let i = 0; i < length; i++) {
      otp += digits[Math.floor(Math.random() * 10)];
    }
  
    return otp;
  }
  
  const otp = generateOTP(6); // Change the number to the desired OTP length
  console.log(`Your OTP is: ${otp}`);