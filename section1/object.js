let student = {
    name : 'raju',
    age : 5,
    'roll no' : 545,
}
console.log(student.name)
console.log(student['roll no'])
// thisIsCalledCamelCase
console.log(student.nae);
student.adress="bangalore"
student.age = 30 ;
console.log(student);

const pro = {
    name : ' laptop',
    price : 34040,
    color : [ ' red' , 'green','white'],
}
console.log(pro.color[2])

const orders  = [ 
    {  name : ' laptop',  price : 30000, color : 'red'},
    {  name : 'mouse',  price : 2000, color : 'black'},
    {  name : 'keyboard',  price : 3000, color : 'white'},
]

console.log(orders[0].name)
 
//  tsking varialbe from object  destructuring 
const { age , adress , name } = student;
console.log(age)

const brand = ' samsung'
const price = 40000
const model = 'note 9'
const rating = 5.6

const mobile = { brand, price , model, rating };
console.log(mobile)
mobile.brand="apple";
console.log(mobile)
console.log('rrr++++')
console.log(Object.values(orders))
console.log(Object.keys(mobile))
console.log(Object.entries(pro))
let add = 0;
for( let n of orders ) { add += n.price}console.log(add)
console.log('reduce----');
let rate = orders.map(n => n.price)
console.log(rate)
let totalrate = rate.reduce((p1,p2) =>  p1+p2 )
console.log(totalrate)