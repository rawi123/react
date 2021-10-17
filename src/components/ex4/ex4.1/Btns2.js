import React from 'react';
import Btn from './Button';

const Btns = () => {
	return (
		<div>
			<Btn>
				<p>
					<strong>Important</strong>
				</p>
			</Btn>
			<Btn>
				<p>Not Important</p>
			</Btn>
		</div>
	);
};


export default Btns;