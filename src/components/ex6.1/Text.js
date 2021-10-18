import React from 'react';

class Text extends React.Component {
	constructor(props) {
		super()
		this.props=props
	}
	render() {
		return (
			<div className="text">
				<h3>{this.props.title}</h3>
				<p>{this.props.description}</p>
				{this.props.children}
			</div>
		)
	}
}

export default Text;

