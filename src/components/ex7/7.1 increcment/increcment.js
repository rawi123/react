import React from "react";

class Increcment extends React.Component {

    constructor(props) {
        super(props)
        this.state = { number: 0 }
    }

    render() {
        const add1=()=>{this.setState({number:this.state.number+1})}
        const dec1=()=>{this.setState({number:this.state.number-1})}
        return (
            <div>
                <input type="submit" value="increcment" onClick={add1}></input>
                <input type="submit" value="decreasement" onClick={dec1}></input>
                <input type="submit" value="reset" onClick={()=>{this.setState({number:0})}}></input>
                <h3>{this.state.number}</h3>
            </div>
        )
    }

}

export default Increcment