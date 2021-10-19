import React from "react";
import Spinner from "../ex9/spinner";
import ChuckBtn from "./btn";
import ChuckSearch from "./CheckSearch";
import Select from "./select"
class ChuckNorris extends React.Component {
    constructor(props) {
        super(props)
        this.state = { joke: "" ,select:"random",search:""}
    }


    func = (btnVal) => {
        this.setState({ joke: btnVal })
    }

    getSearch=(search)=>{
        this.setState({search:search})
    }

    getSelect=(selectVal)=>{
        this.setState({select:selectVal})
    }

    render() {
        return (
            <div>
                <ChuckBtn category={this.state.select} onClickjoke={this.func} />
                <Select returnFunc={this.getSelect}/>
                <br/>
                <ChuckSearch giveDad={this.getSearch}/>
                <ChuckBtn text="search" search={this.state.search} onClickjoke={this.func}/>
                <hr />
                {this.state.joke}
            </div>
        )
    }
}

export default ChuckNorris;
