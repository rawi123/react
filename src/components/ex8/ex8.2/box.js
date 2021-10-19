import React from "react";

class Box extends React.Component {
    constructor(props) {
        super(props)
        this.state = { class: "box-hidden" }
        this.flag = true;
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ class: "box-show" })
        }, 1000);
    }

    componentDidUpdate() {
        setTimeout(() => {
            if (this.flag) {
                this.setState({ class: "box-hidden" })
                this.flag = false;
            }
        }, 4000);
    }

    render() {
        return (
            <div className={this.state.class} style={{ background: this.props.color, width: this.props.width, height: this.props.height }} >

            </div>
        )
    }

}
export default Box;