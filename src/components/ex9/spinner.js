import React from "react";
import "./style.css"


const Spinner = ({ text}) => {
    return (<div>
        <h1>{text}</h1>
        <div id="loading"></div>
    </div>)
}

Spinner.defaultProps = {
    text: "loading... please wait"
}

export default Spinner;