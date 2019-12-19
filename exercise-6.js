//#1
console.log('LOOPING PERTAMA')
var i = 2
while(i <= 20) {
  console.log(i + ' - I love coding')
  i++
}

console.log('LOOPING KEDUA')
var i = 20
while(i >= 2) {
  console.log(i + ' - I will become fullstack developer')
  i--
}



//#2
console.log('LOOPING PERTAMA')
for(var i = 1;i <=20; i++) {
  console.log(i + ' I love coding')
}

console.log('LOOPING KEDUA')
for(var i = 20;i >= 2; i--) {
  console.log(i + ' I will become fullstack developer')
}

//#3
//COUNT1-100
for(var i = 1; i <= 100; i++) {
  console.log(i)
}
//GANJILGENAP
for(var i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log("GENAP")
  } else {
    console.log("GANJIL")
  }
}
// KELIPATAN 3
for(var i = 1; i <= 100; i +=2) {
  if (i % 3 === 0) {
    console.log(i + ' KELIPATAN 3')
  } else {
    console.log("")
  }
}
// KELIPATAN 6
for(var i = 1; i <= 100; i +=5) {
  if (i % 6 === 0) {
    console.log(i + ' KELIPATAN 6')
  } else {
    console.log("")
  }
}
//KELIPATAN 10

for(var i = 1; i <= 100; i +=9) {
  if (i % 10 === 0) {
    console.log(i + ' KELIPATAN 10')
  } else {
    console.log("")
  }
}