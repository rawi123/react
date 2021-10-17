import React from 'react';

const Text = (props) => {
	return (
		<div>
			<h3>{props.title}</h3>
			<p>{props.description}</p>
			{props.children}
		</div>
	);
};

export default Text;
