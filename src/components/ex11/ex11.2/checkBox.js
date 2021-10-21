import React,{useState} from 'react'

export default function CheckBox({text,defaultChecked}) {
    const [checked,setChecked]=useState(defaultChecked)
    
    const change=(checkedBox)=>{
        setChecked(!checkedBox)
    }

    return (
        <div>
            <input onChange={()=>change(checked)} checked={checked} type="checkbox"/> {text}
            {/* <input defaultChecked={checked} type="checkbox"/> {text} */}
        </div>
    )
}
