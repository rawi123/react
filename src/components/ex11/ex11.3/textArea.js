import React, { useState } from 'react'

export default function TextArea({ text, changeState,startValue }) {
    const [value, setValue] = useState("");
    return (
        <>
            {text} <textarea
                value={value||startValue}
                onChange={(e) => {
                    const newVal = e.target.value
                    changeState(newVal)
                    setValue(newVal)
                }}
            ></textarea>
        </>
    )
}
