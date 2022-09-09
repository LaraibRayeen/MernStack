 class laptop{
    constructor(ram,cpu,hdd){
        this.ram = ram;
        this.cpu = cpu;
        this.hdd = hdd;
    }

     turnon=() =>{
        console.log('laptop is on ')
     }
     getcpu=() =>{
        console.log( 'your cpu is '+this.cpu)
     }
 }
 let lappy = new laptop(4,500,'i7')
 console.log(lappy)
 lappy.turnon()
 lappy.getcpu()