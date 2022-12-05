function palindrome(str) {
    return (str == str.split('').reverse().join('')) 
  }
  
  console.log(palindrome('34543'));// === true
  console.log(palindrome('345543'));// === true
  console.log(palindrome('3'));// === true
  console.log(palindrome(''));// === true
  console.log(palindrome('723210'));// === false