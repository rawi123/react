import React from 'react';
import PurpleBox from './PurpleBox';

const PinkBox = () => {
	return (
		<div className="pink-box">
			<PurpleBox />
			<PurpleBox />
		</div>
	);
};

export default PinkBox;
