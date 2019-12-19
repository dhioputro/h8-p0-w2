//#1
var rows = 1

while(rows <= 5) {
  console.log('*')
  rows++
}

//#2
var rows2 = 5;


for(var i = 1; i <= rows2; i++) {
  var a = '';
  for(var j = 1; j <= rows2; j++) {
    a += '*';
  }
  console.log(a);
}

//#3
var rows3 = 5;

for(var i = 1; i <= rows3; i++) {
  var a = '';
  for(var j = 1; j <= i; j++) {
    a += '*';
  }
  console.log(a);
}