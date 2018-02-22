class Person{
	constructor(name='Anonymous',age=0){
		this.name=name;
		this.age=age;
	}
	getGreeting(){
		return `Hi I am ${this.name}.`;
	}
	getDescription(){
		return `${this.name} is ${this.age} year(s) old.`
	}
}
class Student extends Person{
	constructor(name,age,major)
	{
		super(name,age);
		this.major=major;
	}
	hasMajor(){
		return !!this.major;
	}
	getDescription(){
		let description=super.getDescription();
		if(this.hasMajor()){
			description+=`Thier major is ${this.major}`;
		}
		return description;
	}
}
// Exercise
class Traveler extends Person{
	constructor(name,age,location){
		super(name,age);
		this.location=location;
	}
	hasLocation(){
		return !!this.location;
	}
	getGreeting(){
		let greeting=super.getGreeting();
		if(this.hasLocation()){
			greeting+=`I am visting from ${this.location}`;
		}
		return greeting;
	}
}
const me=new Traveler('Asim Ansari',21,'Noida');
console.log(me.getGreeting());
const other=new Traveler();
console.log(other.getGreeting());

// const lol=new Person('Adam Capeland',25);
// console.log(lol);
// const me=new Student('Asim Ansari',21,'ECE');
// console.log(me.getDescription());
// const other=new Student();
// console.log(other.getDescription());

