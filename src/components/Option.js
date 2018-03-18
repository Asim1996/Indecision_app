import React from 'react';
 const Option=(props) => (
			<div>
			{props.optionText}
			<button class="button button--link"
			onClick={(e) => {
				props.handleDeleteOption(props.optionText)
			}}
			>Remove
			</button>
			</div>
			);
			
export default Option;