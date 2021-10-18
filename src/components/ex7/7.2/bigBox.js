import React from "react";
import "./style.css"


class BigBox extends React.Component{
    constructor(props){
        super(props)
        this.state={display:"none"}
    }
    render(){
        const showHide=()=>{
            
            this.setState({display:this.state.display==="none"?"block":"none"})
        }
        return(
            <div>
                <input type="submit" value="show/hide" onClick={showHide}></input>
                <div className="box" style={{display:this.state.display}}></div>
            </div>
        )
    }
}

export default BigBox;