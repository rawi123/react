import React from 'react'
import { Text } from './Text';

const Container=()=> {
    return (
        <div>
            <Text textProp="lorem is the best because its not good but its awesome!" maxLength={10}/>
        </div>
    )
}
export default Container;
