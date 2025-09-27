// class
class Studen {
    name: string;
    age: number;
    
constructor(name:string, age:number)
{
    this.name = name;
    this.age = age;

}

introduce(){
    console.log(`Tôi là ${this.name}, ${this.age} tuổi.`);
    
}
}

const s1 = new Studen("Lan", 12);
const s2 = new Studen("Tú", 20);
s1.introduce();
s2.introduce();