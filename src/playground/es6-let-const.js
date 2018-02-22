var nameVar='Andrew';
var nameVar="Mike";
console.log('nameVar',nameVar);
var name=’Harvey’;
console.log(‘name’,name);//name Harvey
name=10;//Reassign name
console.log(‘name’,name);//name 10
var name=’Mike’;//Redefine name
console.log(‘name,name);//name Mike

let nameLet='Jen';
let nameLet='edge';
Not possible
console.log('nameLet',nameLet)

const nameConst='Frank';
 // nameConst='Harvey';Not possible
 // const nameConst='Harvey;Not possible'
console.log('nameConst',nameConst)

// Scoping
// function getPetName(){
// 	let petName='Hal';
// 	return petName;
// }
// getPetName();
// console.log(petName);

// Block Scoping
// const fullName='Edge Ansari';
// let firstName;
// if(fullName){
// 	firstName=fullName.split(' ')[0]
// 	console.log(firstName)
// }
// console.log(firstName);

const getFirstName=(name)=>{
	return name.split(' ')[0];
}

console.log(getFirstName('Adam Capeland'));
const user={
	name:'Andrew',
	cities:['Newyork','Usa'],
	// placeLived(){
	// 	this.cities.forEach((city)=>{
	// 		console.log(this.name+'lived in'+city);
	// 	})
	// }
	// ES6 method definition syntax
	printplaceLived(){
		return this.cities.map((city)=>this.name+'has lived in'+city);
	}
}
console.log(user.printplaceLived());
const multiplier={
	numbers:[2,3,4],
	multiplyBy:2,
	multiply(){
		return this.numbers.map((number)=>number*this.multiplyBy);
	}
}
console.log(multiplier.multiply());

