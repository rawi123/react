import React from "react";


class ChuckSearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = { search: "" }
    }


    render() {
        return (
            <input type="text" value={this.state.search}
                onChange={(e) => {
                    this.setState({ search: e.target.value })
                    this.props.giveDad(this.state.search)
                }}
            ></input>
        )
    }

}

export default ChuckSearch