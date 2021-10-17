import React from 'react';
import ShareExplore from './ShareExplore';
import Image from './Image';
import Text from './Text';
import './style.css';

const CardComp = (prop) => {
	return (
		<div className="card">
			<Image img={prop.img} alt={prop.alt}/>
			<Text title={prop.title} description={prop.description}>
				<ShareExplore share={prop.share} explore={prop.explore} />
			</Text>
		</div>
	);
};

export default CardComp;
