function konversiMenit(menit) {
    // you can only write your code here!
    var jam = Math.floor(menit/60)
    var x = menit % 60
    var menitx = ''
    if (x < 10) {
         menitx = '0' + x
    } else {
        menitx = x
    }
    return jam + ':' + menitx
 }

  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00
