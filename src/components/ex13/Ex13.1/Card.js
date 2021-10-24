import React from 'react'

export default function Card({person}) {
    return (
        <div className="card">
            first name:{person.name}
            <br/>
            birthday:{person.birthday}
            <br/>
            favorite foods:
            <br/>
                meats: {person.favoriteFoods.meats.map((val,i)=>val+(i+1!==person.favoriteFoods.meats.length?", ":""))}

                <br/>
                fish:{person.favoriteFoods.fish.map((val,i)=>val+(i+1!==person.favoriteFoods.fish.length?", ":""))}
                <br/>
                

        </div>
    )
}
