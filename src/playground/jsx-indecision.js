console.log('App working');
const app={
	title:'Indecision App',
	subtitle:'Put your life in the hands of a computer',
	options:[]
}
const onFormSubmit=(e) =>{
	e.preventDefault();
	const option=e.target.elements.option.value;
	console.log(option)
	if(option){
		app.options.push(option);
		e.target.elements.option.value='';
		renderIndecisionApp();
	}
}
const onRemove=() =>{
	app.options=[];
	renderIndecisionApp();
}
const onMakeDecision=() =>{
	const randomNum=Math.floor(Math.random()*app.options.length);
	const option=app.options[randomNum];
	alert(option);

}
const appRoot=document.getElementById('app');
// const numbers= [50,100,1000]
const renderIndecisionApp=() =>{
const template=( 
		<div>
			<h1>{app.title}</h1>
			{app.subtitle && <p>{app.subtitle}</p>}
			{app.options.length>0?'Here are your option:':'No Options'}
			{/*<p>{app.options.length}</p>*/}
			<button disabled={app.options.length===0} onClick={onMakeDecision}>What should i do?</button>
			<button onClick={onRemove}>Remove All</button>
			{
				// [99,98,'hye']
				// [<p key="1">a</p>,<p key="2">b</p>,<p key="3">c</p>]
			// numbers.map((number) =>{
			// 	return <p key={number}>Number:{number}</p>

			// })
			}
			<ol>
				{
					app.options.map((option) =>{
						return <li key={option}>{option}</li>
					})
				}
			</ol>
			<form onSubmit={onFormSubmit}>
			<input type="text" name="option"/>
			<button>Add options</button>
			</form>
		</div>
		);
	ReactDOM.render(template,appRoot);
}

renderIndecisionApp();


