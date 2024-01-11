//here we apply --inhertance(father),extends,super,constructor,new keyword class and object//
//...........................................................................................................................

class father {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`my name is ${this.name}and my age is ${this.age} `)
    }
}


class student extends father {
    constructor(name, age, marks) {
        super(name, age)
        this.marks = marks;

    }

    talk() {
        super.talk();
        console.log(`my mark is ${this.marks}`);
    }

};



class teacher extends father {
    constructor(name, age, subject) {
        super(name, age)
        this.subject = subject;
    } talk() {
        super.talk();
        console.log(`my subject is ${this.subject}`);
    }


};

let t1 = new teacher("bitto0000", 12, "tech");
let p1 = new student("ashraful", 84, 98);



//...........................................................................................................................
//this is on contructor key which fuction dont return anything and start with uppercase
//.............................................................................................................


class village {
    constructor(family, member, earn) {
        this.family = family;
        this.member = member;
        this.earn = earn;
    }
    live() {
        console.log(`im belongs to ${this.family} and we are alive`);
    }
};


let member1 = new village("intaz mahajan", 25, "100cr");
let member2 = new village("kalu bongso", 25, "1cr");
let member3 = new village("aalu bangso", 25, "5cr");
let member4 = new village("bagan bongso", 25, "85lakh");
let member5 = new village("vikari bongso", 25, "92lakh 2 hazar");
let member6 = new village("tangra bongso", 25, "85.85lakh & 2 housand");





//.............................................................................................................
//.............................................................................................................
//here is the other example for myself too  revice in the future



class LungiHouse {
    constructor(name, rate, inx) {
        this.name = name;
        this.rate = rate;
        this.inx = inx;


    }
    talk() {
        console.log(`name=${this.name},rate=${this.rate},position=${this.inx}`);
    }

};

class salimfk extends LungiHouse {
    constructor(name, rate, inx) {
        super(name, rate);
        this.inx = inx;
    }

};



class kckbazar extends LungiHouse {
    constructor(name, rate, inx, extraitem) {
        super(name, rate);
        this.inx = inx;
        this.extraitem = extraitem;
    }
    talk() {
        super.talk();
        console.log(`and this extraitem  is ${this.extraitem}`);
    }
};


let item1 = new salimfk("podda lungi", "450/-", "2/10");
let item2 = new kckbazar("chosa lungi" ,"480/-",  "3/09" , "lattu lungi/tawla" );

//....................................................................................................................................
//one more exmple
//...............................................................................................................................

class vikash{
    constructor(name,section,sex,total){
       this.name=name;
       this.section=section;
       this.sex=sex;
       this.total=total;
       
    }
    talk() {
        console.log(`Hey, I'm ${this.name}, I read in class ${this.constructor.name}, my section is ${this.section}, and my sex is ${this.sex}`);
    }

}
class cls5 extends vikash{
    constructor (name,section,sex,total){
        super(name,section,total);
       
    }
   
        
    }




class cls6 extends vikash{
    constructor(name,section,total,sex){
        super(name,section,total,sex)
    }
};


let p1 = new cls5("ashraful momin" ,"A" , "MALE" , "385/500" );
let p2 = new cls5("najam alam" ,"A" , "MALE" , "415/500" );
let p3 = new cls6("rishan sk" ,"b" , "MALE" , "368/500" );
let p4 = new cls6("apurna" ,"b" , "feMALE" , "350/500" );


