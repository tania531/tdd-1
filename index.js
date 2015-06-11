function doubler (a, b) {
  if((typeof a  === 'string') && (typeof b  === 'string')){
    return (a+a) + (b+b);
  } else if (typeof a === 'number' && typeof b === 'number'){
    return a*2 + b*2;
  }

}

if(doubler(4,2) === 12){
  console.log("pass");
} else {
  console.log("fail");
}
if(doubler("a", "b") === "aabb"){
  console.log("pass");
} else {
  console.log("fail");
}
if(doubler("coding", "rocks") === "codingcodingrocksrocks"){
  console.log("pass");
} else {
  console.log("fail");
}
console.assert(doubler(4,2) === 12);
console.assert(doubler(1,3) === 8);
console.assert(doubler(-1,3) === 4);

console.assert(doubler("a", "b") === "aabb");
console.assert(doubler("coding", "rocks") === "codingcodingrocksrocks");

function m3() {
  return 3;
}

function m4() {
  return 4;
}

function m2() {
  return 2;
}

function m1() {
  return 1;
}
var m4 = m4();
var m3 = m3();
var m2 = m2();
var m1 = m1();

// var m4 = 4;
// var m2 = 2;
console.assert(doubler(m1, m3) === 8);

if (doubler(m4, m2) === 12) {
  console.log("pass");
} else {
  console.log("fail");
}
if (doubler(m1, m3) === 8) {
  console.log("pass");
} else {
  console.log("fail");
}
