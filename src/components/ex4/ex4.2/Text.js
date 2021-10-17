import React from 'react';

const Text = (props) => {
	return (
		<div className="text">
			<h3>{props.title}</h3>
			<p>{props.description}</p>
			{props.children}
		</div>
	);
};

export default Text;
