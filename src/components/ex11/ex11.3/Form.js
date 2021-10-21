import React, { useState } from 'react'
import Input from './Input'
import TextArea from './textArea'
import Select from './select'
import Submit from './Submit'
import "./style.css"

export default function Form() {

    const [firstName, setFirstName] = useState(setStateVal("first-name")),
        [lastName, setLastName] = useState(setStateVal("last-name")),
        [textArea, setTextArea] = useState(setStateVal("free-text")),
        [age, setAge] = useState(setStateVal("age", 0)),
        [displayForm, setDisplayForm] = useState(true);


    const finishForm = async (e) => {
        e.preventDefault();
        setDisplayForm(!displayForm)
    }

    function setStateVal(name, val = "") {
        return localStorage.getItem(name) ? localStorage.getItem(name) : val
    }

    return displayForm ? (
        <form className="form" onSubmit={(e) => finishForm(e)}>
            <Input startValue={firstName} text="first Name:" changeState={setFirstName} storage="first-name" /><br />
            <Input startValue={lastName} text="last Name:" changeState={setLastName} storage="last-name" /><br />
            <Select startValue={age} range={50} text="age:" changeState={setAge} />
            <TextArea startValue={textArea} text="free text" changeState={setTextArea} />
            <Submit />
        </form>
    ) :
        (
            <div className="form">
                <h2>REVIEW</h2>
                <h3>first name: {firstName}</h3>
                <h3>lastName name: {lastName}</h3>
                <h3>age: {age}</h3>
                <h3>freetext: {textArea}</h3>
                <div>
                    <input type="submit" value="Back" onClick={(e) => finishForm(e)}></input>
                    <input type="submit" value="Send survey" onClick={() => {
                        localStorage.clear()
                        window.location.reload()
                    }}></input>
                </div>
            </div>
        )

}
