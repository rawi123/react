import React from "react";
import axios from "axios";

class Select extends React.Component {

    constructor(props) {
        super(props)
        this.ref = React.createRef()
    }
    async componentDidMount() {
        const category = await axios.get("https://api.chucknorris.io/jokes/categories")
        category.data.map(val => { this.ref.current.innerHTML += `<option>${val}</option>` })
    }

    render() {
        return (
            <select onChange={(event) => { this.props.returnFunc(event.target.value) }}
                ref={this.ref}>
                <option >random</option>
            </select>
        )
    }

}



export default Select