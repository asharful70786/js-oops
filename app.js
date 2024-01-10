//here we apply --inhertance(father),extends,super,extends,new keyword class and object//

class father{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    talk(){
       console.log(`my name is ${this.name}and my age is ${this.age} `)
    }
}


class student extends father{
    constructor (name , age, marks){
        super(name,age)
        this.marks=marks;

    }
   
    talk(){
        super.talk();
        console.log(`my mark is ${this.marks}`);
    }

    };



class teacher extends father{
    constructor(name , age, subject){
        super(name,age)
        this.subject=subject;
    }talk(){
        super.talk();
        console.log(`my subject is ${this.subject}`);
    }
    
    
};

let t1= new teacher("bitto0000" , 12 ,"tech" );
let p1= new student("ashraful" , 84, 98);



//......................................................
//this is on contructor key which fuction dont return anything and start with uppercase
class village{
    constructor(family,member,earn){
        this.family=family;
        this.member=member;
        this.earn=earn;
    }
    live(){
        console.log(`im belongs to ${this.family} and we are alive`);
    }
};


let member1 = new village("intaz mahajan" ,25 , "100cr");
let member2 = new village("kalu bongso" ,25 , "1cr");
let member3 = new village("aalu bangso" ,25 , "5cr");
let member4 = new village("bagan bongso" ,25 , "85lakh");
let member5 = new village("vikari bongso" ,25 , "92lakh 2 hazar");
let member6 = new village("tangra bongso" ,25 , "85.85lakh & 2 housand");

