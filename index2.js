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
