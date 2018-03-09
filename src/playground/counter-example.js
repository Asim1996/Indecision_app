class Counter extends React.Component{
	constructor(props){
		super(props);
			this.handleAddOne=this.handleAddOne.bind(this);
			this.handleMinusOne=this.handleMinusOne.bind(this);
			this.handleReset=this.handleReset.bind(this);
			this.state={
			count:0
			}
	}
	componentDidMount(){
		try{
			var res=localStorage.getItem('count');
			var count=parseInt(res,10);
			if(!isNaN(count)){
 			this.setState(() => {
			return {
				count
				};
		});		
		}
		}catch(e){
			//HAndle error
		}

		
	}
	componentDidUpdate(prevProps,prevState){
		if(prevState.count !== this.state.count){
			localStorage.setItem('count',this.state.count);
		}
		
		
	}
	handleAddOne() {
		this.setState((prevState) => {
			return {
				count:prevState.count+1
				};
		});
	
	}
	handleMinusOne() {
		this.setState((prevState) => {
			return {
				count:prevState.count-1
				};
		});
	}
	handleReset() {
		this.setState(() => {
			return {
				count:0
				};
		});
	}
	render(){
		return(
			<div>
			<h1>Count :{this.state.count}</h1>
			<button onClick={this.handleAddOne}>+1</button>
			<button onClick={this.handleMinusOne}>-1</button>
			<button onClick={this.handleReset}>Reset</button>

			</div>

			)
	}
}
 	ReactDOM.render(<Counter/>,document.getElementById('app'));

 // let count=0;
// const addOne= () =>{
// 	count++;
// 	renderCounterApp();
// };
// const minusOne=() =>{
// 	count--;
// 	renderCounterApp();
// }
// const reset=() =>{
// 	count=0;
// 	renderCounterApp();
// }

// const renderCounterApp= () =>{
// 	const templateTwo=(
// 	<div>
// 	<h1>Count:{count}</h1>
// 	<button onClick={addOne}>+1</button>
// 	<button onClick={minusOne}>-1</button>
// 	<button onClick={reset}>Reset</button>
// 	</div>
// 	)
// 	ReactDOM.render(templateTwo,appRoot);
// }
// renderCounterApp();

// // Exercise
// const user={
// 			name:'Asim',
// 			age:25,
// 			location:'singapore'
// 		}
// 		function getLocation(location){
// 			if(location){
// 				return <p>Location:{location}</p>;
// 			}
			
// 		}
// 		// const userName='Asim';
// 		// const userAge=21;
// 		// const userLocation="India";
// const template2=(
// 	<div>
// 		<h1>{user.name?user.name:'Anonymous'}</h1>
// 		{/*<p>Age:{user.age}</p>*/}
// 		{(user.age && user.age>=18)&&<p>Age:{user.age}</p>}
// 		{/*<p>Location:{getLocation(user.location)}</p>*/}
// 		{getLocation(user.location)}
// 	</div>	
// 	);