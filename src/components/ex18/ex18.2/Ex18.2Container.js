import React from 'react'
import { useState } from 'react/cjs/react.development'

export default function Ex182Container() {
    const [data, setData] = useState([
        { name: "CSS", completed: true },
        { name: "JavaScript", completed: true },
        { name: "Learn React", completed: false },
        { name: "Learn mongoDB", completed: false },
        { name: "Learn Node JS", completed: false },
    ])
    const handelClick=(val)=>{
        const tempArr=[...data]
        tempArr[tempArr.indexOf(val)].completed=!tempArr[tempArr.indexOf(val)].completed
        setData(tempArr)
    }
    return (
        <div>
            {data.map(val =>
                <div key={val.name} style={{ margin: "1rem", display: "flex", alignItems: "center" }}>
                    <span style={{ textDecoration:val.completed?"line-through":"none", fontWeight: 500, fontSize: "1.6rem", marginRight: "1rem" }}>{val.name} </span>
                    <span style={{cursor:'pointer'}} onClick={()=>{handelClick(val)}}>{val.completed ? <>{'\u2713'}</> : <>{'\u2716'}</>}</span>
                </div>
            )}
        </div>
    )
}
