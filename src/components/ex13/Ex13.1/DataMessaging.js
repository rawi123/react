import React, { Component } from 'react'
import Card from './Card'
import Name from './Name'
import "./style.css"

export default class DataMessaging extends Component {
    constructor(props) {
        super(props)
        const data= [
            {
                name: "John",
                birthday: "1-1-1995",
                favoriteFoods: {
                    meats: ["hamburgers", "sausages"],
                    fish: ["salmon", "pike"],
                },
            },
            {
                name: "Mark",
                birthday: "10-5-1980",
                favoriteFoods: {
                    meats: ["hamburgers", "steak", "lamb"],
                    fish: ["tuna", "salmon", "barracuda"],
                },
            },
            {
                name: "Mary",
                birthday: "1-10-1977",
                favoriteFoods: {
                    meats: ["ham", "chicken"],
                    fish: ["pike"],
                },
            },
            {
                name: "Thomas",
                birthday: "1-10-1990",
                favoriteFoods: {
                    meats: ["bird", "rooster"],
                    fish: ["salmon"],
                },
            },
            {
                name: "Johnny",
                birthday: "1-10-1992",
                favoriteFoods: {
                    meats: ["hamburgers", "lamb"],
                    fish: ["anchovies", "tuna"],
                },
            },
        ]
        this.state = {
            data:data,
            names:this.returnNames(data),
            before1990:this.before1990(data)
        }
    }

    returnNames(data){return data.map(({name})=>name)}

    before1990(data){return data.filter(({birthday})=>Number(birthday.substr(birthday.length-4))<1990)}


    render() {
        return (
            <div>
                {this.state.names.map((personName,i)=><Name key={i} name={personName}/>)}
                {this.state.before1990.map((before1990person,i)=><Card key={i} person={before1990person}/>)}
            </div>
        )
    }
}
