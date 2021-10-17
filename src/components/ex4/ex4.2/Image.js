import React from "react";

const Image=(props)=>{
    return(
        <div className="image-container">
            <img src={props.img} alt={props.alt}></img>
        </div>
    )
}
export default Image