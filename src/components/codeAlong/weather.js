import React from "react";

const w=(props)=>{
    return(
        <div>

        </div>
    )
}
class Weather extends React.Component {
    constructor(props) {
        super(props)
        this.state = { lat: null }
        window.navigator.geolocation.getCurrentPosition(
            (location) => {
                console.log(location.coords.latitude)
                this.setState({lat:location.coords.latitude})
            },
            (err) => console.log(err.code === 1 ? "position not allowed" : "error")
        )
    }
    render() {
        return (
            <div>
                Latitude:{this.state.lat}
            </div>
        )
    }
}


export default Weather;