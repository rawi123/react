import React from "react";
import Box from "./box";
import "./style.css"
class Ex82 extends React.Component {

    render() {
        return (<div className="ex-82">
            <Box width="300px" height="300px" color="black" />
            <Box width="200px" height="200px" color="pink" />
            <Box width="100px" height="100px" color="green" />

        </div>)
    }

}


export default Ex82