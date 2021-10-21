import React,{useState} from 'react'
import Btn from './btn'
import "./style.css"

export default function Container() {
    const [color,setColor]=useState("")
    
    const changeColor=(col)=>setColor(col)

    return (
        <div>
            <Btn callBack={changeColor} color="red"/>
            <Btn callBack={changeColor} color="blue"/>
            <Btn callBack={changeColor} color="pink"/>
            <h2>used color is: {color}</h2>
        </div>
    )
}
