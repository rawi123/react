import CheckBox from "./checkBox";
import React from 'react'

export default function Container() {
    return (
        <div>
            <CheckBox defaultChecked={false} text="first checkBox"/>
            <CheckBox defaultChecked={false} text="second checkBox"/>
            <CheckBox defaultChecked={true} text="third checkBox"/>
            <CheckBox defaultChecked={true} text="fourth checkBox"/>
        </div>
    )
}
