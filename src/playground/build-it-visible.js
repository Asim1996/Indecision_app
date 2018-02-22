// My solution
// const app={
// 	title:'Visibility Toggle',
// 	secret:'',
// 	buttonText:'Show details'
// }
// const changeState=()=>{
// 	if(app.buttonText==='Show details'){
// 		app.secret='Hey I am visible now';
// 		app.buttonText='Hide details';
// 		renderApp();	
// 	}
// 	else{
// 		app.secret='';
// 		app.buttonText='Show details';
// 		renderApp();	
// 	}
	
// }
// const appRoot=document.getElementById('app');
// const renderApp=() =>{
// const template=(
// 	<div>
// 	<h1>{app.title}</h1>
	
// 	<button onClick={changeState}>{app.buttonText}</button>
// 	{app.secret && <p>{app.secret}</p>}
// 	</div>
// 	);
// ReactDOM.render(template,appRoot)
// }
// renderApp();
let visibility=false;
const toggleVisibility=()=>{
	visibility=!visibility;
	render();
}
const render=() =>{
	const jsx=(
		<div>
		<h1>Visibility Toggle</h1>
		<button onClick={toggleVisibility}>{visibility?'Hide details':'Show details'}</button>
		{visibility && <p>Here are your details!</p> }
		</div>

		);
	ReactDOM.render(jsx,document.getElementById('app'));
}
render();
