import React, { useEffect } from 'react'
import { useState } from 'react/cjs/react.development';
import CheckBox from './CheckBox'

export default function CheckBoxContainer({flag, arrProp, changeToDeleteCB }) {
    const [arr, setArr] = useState([...arrProp]);

    const changeSelected = (text, checkedFlag) => {
        changeToDeleteCB(text, checkedFlag)
    }

    useEffect(() => {
        if (arr !== arrProp) {
            setArr(arrProp)
        }
    }, [arrProp])

    return (
        <div>
            {arr.map(val => <CheckBox key={val} flag={flag} checked={false} fromFatherProp={true} text={val} callBack={changeSelected} />)}
        </div>
    )
}
