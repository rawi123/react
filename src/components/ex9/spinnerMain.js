import React from "react";
import Spinner from "./spinner";

function genText() {
    const arr = ["wait you bastard...", "loading...", "whatever"]
    return arr[Math.floor(Math.random() * (arr.length + 1))]
}


class SpinnerMain extends React.Component {

    constructor() {
        super()
        this.state = { time: 5 }
        this.text = genText();
    }

    componentDidMount() {
        this.setState({ time: this.state.time })
    }

    componentDidUpdate() {
        if (this.state.time > 0) {
            setTimeout(() => {
                this.setState({ time: this.state.time - 1 })
            }, 1000);
        }
    }

    dataLoaded() {
        if (this.state.time > 0) {
            return (
                <div ref={this.ref}>
                    <Spinner text={this.text} />
                    <h3>{this.state.time}</h3>
                </div>
            )
        }
        return (
            <div>
                <h3>
                    here is your data:...
                </h3>
            </div>
        )
    }

    render() {
        return this.dataLoaded()
    }

}

export default SpinnerMain;
