import React from 'react'

export default function Btn({color,callBack}) {
    return (
        <div className="btn" style={{background:color}} onClick={()=>callBack(color)}>{color}</div>
    )
}
