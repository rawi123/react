import React from 'react';
import ShareExplore from './ShareExplore';
import Image from './Image';
import Text from './Text';
import './style.css';

class CardComp extends React.Component{
	constructor(props){
		super()
		this.prop=props
	}
	render() {
		return (
			<div className="card">
				<Image img={this.prop.img} alt={this.prop.alt} />
				<Text title={this.prop.title} description={this.prop.description}>
					<ShareExplore share={this.prop.share} explore={this.prop.explore} />
				</Text>
			</div>
		)
	}
}

export default CardComp;
