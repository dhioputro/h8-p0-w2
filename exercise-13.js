function xo(str) {
    // you can only write your code here!
    var x = '';
    var o = '';
    
    for(i=0; i < str.length; i++) {
        if(str[i] === 'x') {
          x++
        } else {
          o++
        }
    }

    if(x === o) {
        return true;
    }else {
        return false;
    }
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true