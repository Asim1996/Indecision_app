import React from 'react';
export default class AddOption extends React.Component{
	state = {
		error:undefined
	}
	// Use babel class property transform
	// constructor(props){
	// 	super(props);
	// 	this.handleAddOption=this.handleAddOption.bind(this);
	// 	}
	handleAddOption =(e) => {
	e.preventDefault();
	const option=e.target.elements.option.value.trim();
	const error=this.props.handleAddOption(option);	
		this.setState(() =>({error}))
		if(!error){
			e.target.elements.option.value='';
		}
		// {
		// 	return {error}
		// })
	}
	render(){
		return(
			<div>
			{this.state.error && <p className="add-option-error">{this.state.error}</p> }
			<form className="add-option" onSubmit={this.handleAddOption} action="#">
			<input className="add-option__input" type="text" name='option' placeholder="Enter something"/>
			<button className="button">Add Option</button>
			</form>
			</div>
			);
	}
}
