import React from "react";

class ShareExplore extends React.Component {
    constructor({share,explore}) {
        super()
        this.share=share;
        this.explore=explore;
        console.log(this.share);
    }
    render() {
        return (
            <div className="share-explore">
                <a href={this.share}>Share</a>
                <a href={this.explore}>Explore</a>
            </div>
        )
    }
}

export default ShareExplore;
