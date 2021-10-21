import React, { useState } from 'react'

export default function Select({ text, changeState, range, startValue, onChangeCB }) {


    return (
        <div>
            {text} <select required={true}
                value={startValue}
                onChange={(e) => {
                    changeState(e.target.value)
                    localStorage.setItem("age", e.target.value)
                }}>
                {Array.from(Array(range).keys()).map(val => <option key={val} value={val}>{val}</option>)}
            </select>
        </div >
    )
}
