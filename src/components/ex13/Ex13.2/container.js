import React, { useState } from 'react'
import Avatar from './avatar'
import Filter from './filter'
import axios from 'axios'
import "./style.css"

export default class Container extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            people: [],
            peopleCopy: [],
            id: 0
        }
    }
    getAvatars = async () => {
        for (let i = 0; i < 12; i++) {
            const avatarsData = await axios.get("https://randomuser.me/api/")
            const personCardData = {
                pic: avatarsData.data.results[0].picture.large,
                name: `${avatarsData.data.results[0].name.first} ${avatarsData.data.results[0].name.last}`,
                id: this.state.id
            }
            const tempPeople = this.state.people
            tempPeople.push(personCardData)
            this.setState({ people: tempPeople, peopleCopy: tempPeople, id: this.state.id + 1 })
        }
    }

    componentDidMount() {
        this.getAvatars()
    }

    handleFilterChange = (searchInput) => {
        searchInput = searchInput.split("")
        const filteredArray = this.state.people.filter(val => {
            let temp = true;
            for (let i = 0; i < searchInput.length; i++) {
                if (val.name[i].toLowerCase() !== searchInput[i].toLowerCase()) {
                    temp = false
                }
                if (!temp) break;
            }
            return temp
        });
        this.setState({ peopleCopy: filteredArray })
    }
    delete = (id) => {
        const temp = this.state.peopleCopy
        temp.splice(temp.indexOf(temp.find(val => val.id === id)), 1);
        this.setState({ peopleCopy: temp })
    }

    render() {
        return (<>
            <div className="background"></div>
            <div className="container">
                <Filter onChangeHandel={this.handleFilterChange} />
                <div className="avatar-container">
                    {this.state.peopleCopy.map((data, i) => <Avatar key={i} data={data} delete={this.delete} />)}
                </div>
            </div>
        </>
        )
    }

}
