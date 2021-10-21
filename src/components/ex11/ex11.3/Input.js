import React, { useState } from 'react'

export default function Input({ text, changeState,startValue }) {
    const [value, setValue] = useState("");
    return (<>
        {text} <input type="text"
            value={value||startValue}
            required={true}
            onChange={(e) => {
                const newVal = e.target.value
                changeState(newVal)
                setValue(newVal)
            }} />
    </>
    )

}
