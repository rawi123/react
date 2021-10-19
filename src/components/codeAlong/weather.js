import React from "react";

class Weather extends React.Component {
    state = { lat: null, err: null }
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (location) => this.setState({ lat: location.coords.latitude }),
            (err) => this.setState({ err: err.code === 1 ? "position not allowed" : "error" })
        )
    }
    render() {
        if (!this.state.lat && !this.state.err)
            return (<h2>Loading</h2>)
        if (this.state.lat && !this.state.err)
            return (<h2>lat:{this.state.lat}</h2>)
        return (<h2>error:{this.state.err}</h2>)
    }
}


export default Weather;