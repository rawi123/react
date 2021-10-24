import React, { useState,useEffect } from 'react'

export default function Avatar(dataObj) {
    const [StatedataObj, setStatedataObj] = useState(dataObj)

    useEffect(() => {
        setStatedataObj(dataObj)
    }, [dataObj])
    
    return (
        <div className="card" onClick={()=>{dataObj.delete(StatedataObj.data.id)}}>
            <img src={StatedataObj.data.pic} alt="Italian Trulli" className="person-image"></img>
            <h3>name: {StatedataObj.data.name}</h3>
        </div>
    )
}
