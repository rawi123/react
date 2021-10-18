import React from "react";

class Image extends React.Component {
    constructor({img}) {
        super()
        this.img=img
    }
    render() {
        return (
            <div className="image-container" style={{ background: `url(${this.img})no-repeat center center/cover` }}></div>
        )
    }
}
export default Image

