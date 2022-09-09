
let a = 45;
let b = 10;
console.log(a+b);
console.log(a-b);
console.log(a*b);
  console.log(parseInt(a/b));
console.log(a%b);



//  date  and time 
var today = new Date();
console.log(today);
var day = today.getDay();
console.log(day);
var hour = today.getHours();
console.log(hour);
console.log(today.getMinutes());
console.log(' current date is ' + day );
//  area of triangle 

let x = 6;
let y = 6;
let z = 7;
let area = 5*6/2;
console.log(' area of triangle is ' +area );
//  check for leap year === strict equality operater 

function leap(a){

    if(a%4==0)
    console.log('given number is leap year  ');
    else if (a % 100==0 ) 
    console.log('given number is leap year  '+a );
    else if  (a% 400 == 0)
    console.log('given number is leap year  '+a );
    else console.log( ' $(a) is not a leap year' ); 

}

leap(20)

//  find which 1st january is begin a sunday between 2014 to 2050

for ( var year=2014 ;year<=2050; year++ ){
         let d = new  Date(year, 0 , 1);
         if ( d.getDay() === 0)
         {
            console.log( ' yes '+year);
         }
}

//  get a random integer from 1 to 0 
 let num  = Math.ceil(Math.random()*5);
 console.log(num);
 let guss = 5;
 if(num==guss)
 console.log('matched');
 else console.log(' not matched ');

//  check if a number is prime 

num= 17;
for ( i = 2; i <num ; i++){

   if (num%i==0 ){
      console.log(num+ ' is  not prime')
      break;
      
   }
   else{
      console.log( num+  ' is prime')
      break;
   }
}

// square all the number and store in new array
let newarr=[];
let result;
let arr = [4,5,7,2,8]
for( i=0 ;i<arr.length ; i++){
   result =  arr[i]*arr[i];
   newarr.push(result);
   
}
console.log(newarr);

// wap  to finf perfect square upto 100
// for ( i=2; i<=10 ; i++){
// let sqrt = i**0.5
// if( sqrt == parseInt)
// }


//  filter all even number and store in new array 

let arr1 = [3,4,5,6,7,8];
let result1 = [];
for(i=0;i<arr1.length;i++){
   if(arr1[i]%2==0){
      result1.push(arr1[i])
   }
}
console.log(result1);

//  fibonacci series( current number is a sum of last two numner)
 let num1 = 0;
 let num2 = 1;
 let next = 0;
 console.log(num1)
 console.log(num2)
for ( i= 1; i <10 ; i++){
console.log(num1+num2);
next = num1+num2;
num1=num2;
num2=next;
}











