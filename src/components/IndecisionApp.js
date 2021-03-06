import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action'
import Options from './Options';
import OptionModal from './OptionModal'
export default class IndecisionApp extends React.Component{
	state={
		options:[],
		selectedOption:undefined

	}
	// constructor(props){
	// 	super(props);
	// 	this.handleDeleteOptions=this.handleDeleteOptions.bind(this);
	// 	this.handleAddPick=this.handleAddPick.bind(this);
	// 	this.handleAddOption=this.handleAddOption.bind(this);
	// 	this.handleDeleteOption=this.handleDeleteOption.bind(this);
	// 	this.state ={
	// 		options:[]
	// 	};
	// }
	handleDeleteOptions = () => {
		this.setState(() => ({ options: [] }));
		// this.setState(() => {
		// 	return{
		// 		options:[]
		// 	};
		// });
	}
	handleDeleteOption = (optionToRemove) => {
		this.setState((prevState) => ({
			
			options:prevState.options.filter((option) =>{
			
				return optionToRemove!==option;
			})
		}))
	}
	handleAddPick = () => {
	console.log(this.state);
	const randomNum=Math.floor(Math.random()* this.state.options.length);
	const option=this.state.options[randomNum];
		// alert(option);
	this.setState(() => ({
		selectedOption:option
	}));
};
clearOption = () =>{
	this.setState(() => ({
		selectedOption:undefined
	}))	
}
	
	handleAddOption = (option) =>{
		if(!option){
			return 'Enter valid value to add item';
		}else if(this.state.options.indexOf(option) > -1){
			return 'This option already exist';
		}
	this.setState((prevState) => ({options:prevState.options.concat(option)}))
	// {
	// 	return {
	// 		options: prevState.options.concat(option)
	// 	}
	// })	
	// 
}
	componentDidMount(){
		try{
			const json = localStorage.getItem('options');
			const options= JSON.parse(json);
			if(options){
			this.setState(() => ({ options }));
			}	
		}catch(e){
			//Do nothing 
		}
		
			}
	componentDidUpdate(prevProps,prevState){
		if(prevState.options.length!==this.state.options.length){
			const json=JSON.stringify(this.state.options);
			localStorage.setItem('options',json);
		
	}
	}

	render(){
		const subtitle='Put your life in the hands of a computer'
		return(
			<div>
			<Header subtitle={subtitle} />
			<div className="container">
				<Action 
			hasOptions={this.state.options.length>0} 
			handleAddPick={this.handleAddPick}
			/>
			<div className="widget">
				<Options 
			options={this.state.options} 
			handleDeleteOptions={this.handleDeleteOptions}
			handleDeleteOption={this.handleDeleteOption}
			/>
					
			<AddOption handleAddOption={this.handleAddOption} />
	
			</div>
			</div>
			
			<OptionModal clearOption={this.clearOption} selectedOption={this.state.selectedOption}/>
			</div>
			)
		
	}
}
