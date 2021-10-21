import React, { useState } from 'react'
import Input from './Input'
import TextArea from './textArea'
import Select from './select'
import Submit from './Submit'
import "./style.css"

export default function Form() {
    const [firstName, setFirstName] = useState(""),
        [lastName, setLastName] = useState(""),
        [textArea, setTextArea] = useState(""),
        [age, setAge] = useState(0),
        [displayForm, setDisplayForm] = useState(true);

    const finishForm=async (e)=>{
        e.preventDefault();
        setDisplayForm(!displayForm)
    }

    return displayForm ? (
        <form className="form" onSubmit={(e)=>finishForm(e)}>
            <Input startValue={firstName} text="first Name:" changeState={setFirstName} /><br />
            <Input startValue={lastName} text="last Name:" changeState={setLastName} /><br />
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
            <input type="submit" value="Back" onClick={(e)=>finishForm(e)}></input>
            <input type="submit" value="Send survey" onClick={()=>{window.location.reload()}}></input>
        </div>
    )

}
