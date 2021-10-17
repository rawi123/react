import React from "react";

const Image=(props)=>{
    return(
        <div className="image-container" style={{background:`url(${props.img})no-repeat center center/cover`}}></div>
    )
}
export default Image