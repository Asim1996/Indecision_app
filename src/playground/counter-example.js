let count=0;
const addOne= () =>{
	count++;
	renderCounterApp();
};
const minusOne=() =>{
	count--;
	renderCounterApp();
}
const reset=() =>{
	count=0;
	renderCounterApp();
}

const renderCounterApp= () =>{
	const templateTwo=(
	<div>
	<h1>Count:{count}</h1>
	<button onClick={addOne}>+1</button>
	<button onClick={minusOne}>-1</button>
	<button onClick={reset}>Reset</button>
	</div>
	)
	ReactDOM.render(templateTwo,appRoot);
}
renderCounterApp();

// Exercise
const user={
			name:'Asim',
			age:25,
			location:'singapore'
		}
		function getLocation(location){
			if(location){
				return <p>Location:{location}</p>;
			}
			
		}
		// const userName='Asim';
		// const userAge=21;
		// const userLocation="India";
const template2=(
	<div>
		<h1>{user.name?user.name:'Anonymous'}</h1>
		{/*<p>Age:{user.age}</p>*/}
		{(user.age && user.age>=18)&&<p>Age:{user.age}</p>}
		{/*<p>Location:{getLocation(user.location)}</p>*/}
		{getLocation(user.location)}
	</div>	
	);