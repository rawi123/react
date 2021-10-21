import React, { useState } from 'react'
import { Component } from 'react'

export default function Input({ text, changeState, startValue, storage }) {

    return (<>
        {text} <input type="text"
            required={true}
            value={startValue}
            onChange={(e) => {
                changeState(e.target.value)
                localStorage.setItem(storage, e.target.value)
            }}
        />
    </>
    )

}
