import React from "react";

class LifeCycle extends React.Component {
    constructor(props) {
        super(props)
        this.state = { favColor: "pink" }
        this.firstRef=React.createRef();
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({favColor:"orange"})
        }, 1000);
    }
    componentDidUpdate(){
        const div=this.firstRef.current;
        div.innerText=`The updated favorite color is ${this.state.favColor}`
        console.log(div,"divv");
    }

    render() {
        return (<>
            <h1>
                my favorite color is {this.state.favColor}
            </h1>
            <div ref={this.firstRef}>

            </div>
        </>
        )
    }
}



export default LifeCycle