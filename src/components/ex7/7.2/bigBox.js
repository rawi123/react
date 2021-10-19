import React from "react";
import "./style.css"


class BigBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = { class: "box" }
    }
    componentDidMount() {
        const showHide = () => {
            this.setState({ class: this.state.class === "box" ? "" : "box" })
        }
    }
    render() {

        return (
            <div>
                <input type="submit" value="show/hide" onClick={showHide}></input>
                <div className="box" className={this.state.class}></div>
            </div>
        )
    }

}

export default BigBox;