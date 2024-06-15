function test(numbers) {
    let onlyNumbers = numbers.split(/\s/g)  
    // Implement your logic here
    let bigger = parseInt(onlyNumbers[0], 10);
    let lower = parseInt(onlyNumbers[0], 10);
  
    onlyNumbers.forEach((value) => {

      let integerValue = parseInt(value, 10)  

      if (integerValue > bigger) {
          bigger = integerValue;
      }
      if (integerValue < lower) {
          lower = integerValue;
      }
      })
    
    return bigger + " " + lower;  
}

console.log(test("1 2 3 4 5"));
console.log(test("1 2 -3 4 5"));