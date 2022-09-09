// // dont repeat your self  
// function add(a,b){
// //    console.log(a,b);
// //  nan not a number when we use undifine 
//    var c = a+b;
//    console.log(c);
// }

// add(8,3); 

//  var is used for only functon and let work in whole program  
//  globel means out of blocks 
// locals means in the bloks

//  second way to define funtion..

const multi=function(x,y){
   c = x*y;
   console.log(c);
   return c;
   // console.log('hi');
}
// const result = multi( 6,4);
// console.log(result);
console.log(multi(-3,6));

//  third way to define function add in es6 
const subprod = (a,b) => {
   const sub = a+b;
   const prod = a*b;
   // console.log(sum);
   // console.log(prob);
   return  [sub, prod];
}
 
// console.log(subprod(3,4));
 const[ s,p ] = subprod(4,5);
 console.log(s,p);


