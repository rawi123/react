import React, { useState } from 'react'

export default function TextArea({ text, changeState, startValue, onChangeCB }) {
    return (
        <>
            {text} <textarea
                value={startValue}
                onChange={(e) => {
                    changeState(e.target.value)
                    localStorage.setItem("free-text", e.target.value)
                }}
            ></textarea>
        </>
    )
}
