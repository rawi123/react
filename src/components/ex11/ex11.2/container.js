import CheckBox from "./checkBox";
import React from 'react'

export default function Container() {
    return (
        <div>
            <CheckBox checked={false} text="first checkBox"/>
            <CheckBox checked={false} text="second checkBox"/>
            <CheckBox checked={true} text="third checkBox"/>
            <CheckBox checked={true} text="fourth checkBox"/>
        </div>
    )
}
