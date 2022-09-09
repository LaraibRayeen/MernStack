//  map is a function of array return a new array 
 let nums =[ 34,500,6,800,200];
 newnums =nums.map((n) => {return n*n});
 console.log(newnums)

  rupe = nums.map((n) => {return ["₹"+n]})
//   rupe=('$'+rupe); 
  console.log(rupe);

   x = nums.map((n) => {  if( n%2==0) return n/2;  else return n*2   }  );
   console.log(x);
   
   y = nums.map( (n) => {  return n%2==0 ? n/2: n*2})
   console.log(y);

   z = nums.map( n => ( n%2===0 ?n/2:  n*2 ) )
   console.log(z)

   a = nums.filter( (n) => { return n%2==0 })
   console.log(a)

   b = nums.filter( n => n>100)
   console.log(b)

 const arr =['₹432' , '₹34' ,'₹53', '₹193' , '₹345' ]
  arr1 =  arr.filter( (n) => {return n.substring(1) > 100 }  )
   console.log(arr1)

    brands = [ 'lenovo', 'asus', 'dell', 'hp', 'apple', 'microsoft']
    search = ('asus')
    result =  brands.filter( (n) => {return n==search })
    console.log(result)
    console.log(brands.includes('le'));


 
      
    // console.log(+true);
    // console.log('Lydia');
    // const bird = {
    //   size: 'small',
    //   name: 'chhidiya',
    // };
    
    // const mouse = {
    //   name: 'Mickey',
    //   small : true,
    // };

    // console.log(mouse[bird["size"]]);

    //  object 
          
  //   const  person = {
  //    firstname : ' laraib',
  //    lastname : 'rayeen',
  //    age: 21,
  //    eyecolor:'brown',
  //    friend: {
  //       1: 'Abd',
  //       2:'jadu',
  //       3:'asad b',
  //       4: 'sk' ,
  //      },
  //     detail: function()  {
  //       return (this.firstname +'  '+this.lastname).toUpperCase()
  //      } 
  //   }
  //     person.number='8875';
  //   console.log(person)

  // for( let v in  person)
  // {
  //   console.log(person[v])
  // }
  // delete person.number;
  // console.log(person)
  // console.log(person.friend[3])
  // console.log(person["friend"]["1"])
  // console.log(person.detail())

  // CLASS  is a blueprint for a object 
  // everything in javascript in an object but class is a

  // class car {
  //    constructor(name, year){
  //     this.name = name;
  //     this.year = year;
  //   }
  //   age(){
  //     let date =new  Date();
  //     return date.getFullYear -this.year;
  //    }
  // }
  //   let   mycar  = new car("acchewale",383)
  //   console.log(mycar)
    