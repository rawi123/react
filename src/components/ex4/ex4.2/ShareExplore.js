import React from "react";

const ShareExplore=(props)=>{
    return (
        <div className="share-explore">
            <a href={props.share}>Share</a>
            <a href={props.explore}>Explore</a>
        </div>
    )
}


export default ShareExplore;