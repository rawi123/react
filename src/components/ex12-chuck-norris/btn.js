import React from "react";
import axios from "axios";

class ChuckBtn extends React.Component {
    constructor(props) {
        super(props)
    }

    fetchData() {
        if (this.props.text === "search") {
            return(axios.get(`https://api.chucknorris.io/jokes/search?query=${this.props.search}`, {}).then(val => {
                return !val.data.result.length?"nothing was found":val.data.result[Math.floor(Math.random()*val.data.result.length)].value
            }))
        }
        else {
            const category = this.props.category
            console.log(category);
            const url = `https://api.chucknorris.io/jokes/random${category !== "random" ? "?category=" + category : ""}`
            return axios.get(url, {}).then((val) => {
                return val.data.value
            })
        }

    }

    render() {
        return <input type="submit" value={this.props.text || "joke"} onClick={async (event) => {
            this.props.onClickjoke(await this.fetchData())
        }}
        ></input>
    }
}



export default ChuckBtn

