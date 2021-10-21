import React, { useState } from 'react'

export default function Select({ text, changeState, range,startValue }) {

    const [value, setValue] = useState("")

    return (
        <div>
            {text} <select required={true}
                value={value||startValue}
                onChange={(e) => {
                    const newVal = e.target.value
                    changeState(newVal)
                    setValue(newVal)
                }}>
                {Array.from(Array(range).keys()).map(val=><option key={val} value={val}>{val}</option>)}
            </select>
        </div >
    )
}
