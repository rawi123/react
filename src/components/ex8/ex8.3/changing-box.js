import React from "react";
import "./style.css"

class Ex83 extends React.Component {
    constructor(props) {
        super(props)
        this.ref = React.createRef();
        this.state = { time: 0 }
    }

    changeColor() {
        const color = "#" + ((1 << 24) * Math.random() | 0).toString(16)//random color
        this.ref.current.style.background = color
        this.setState({ time: this.state.time + 0.5 })
    }

    componentDidMount() {
        setTimeout(() => {
            this.changeColor()
        }, 500);
    }

    componentDidUpdate() {
        setTimeout(() => {
            if (this.state.time <= 5) { this.changeColor() }
            else { this.ref.current.style.borderRadius = "50%" }
        }, 500);
    }

    render() {
        return (
            <div className="box" ref={this.ref}>

            </div>
        )
    }

}
export default Ex83;