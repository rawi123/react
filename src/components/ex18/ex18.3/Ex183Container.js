import React from 'react'
import { useState, useEffect } from 'react/cjs/react.development';
import CheckBoxContainer from './CheckBoxContainer';
import Delete from './Delete';
import Reset from './Reset';

export default function Ex183Container() {
    const [arr, setArr] = useState({
        orginal: ["one", "two", "three", "four", "five"],
        copy: ["one", "two", "three", "four", "five"]
    })
    const [delAndFlag,setDelAndFlag]=useState({toDelete:[],flag:false})

    const changeReset = () => {
        const temp = { ...arr }
        temp["orginal"] = temp["copy"]
        setArr(temp)
        setDelAndFlag({toDelete:temp,flag:true})
    }
    useEffect(() => {
        if (delAndFlag.flag) {
            setDelAndFlag({toDelete:[],flag:false})
        }
    }, [delAndFlag.flag])

    const changeToDelete = (text, checkedFlag) => {
        if (checkedFlag) setDelAndFlag({toDelete:[...delAndFlag.toDelete, text],flag:delAndFlag.flag})
        else {
            const temp = [...delAndFlag.toDelete]
            temp.splice(temp.indexOf(text), 1)
            setDelAndFlag({toDelete:temp,flag:delAndFlag.flag})
        }
    }

    const handelDelete = () => {
        const temp = { ...arr }
        temp["orginal"] = DelFromArray()
        setArr(temp)

    }

    const DelFromArray = () => {
        const temp = [...(arr.orginal)]
        delAndFlag.toDelete.map(val => {
            temp.splice(temp.indexOf(val), 1)
            return null;
        })
        setDelAndFlag({toDelete:[],flag:delAndFlag.flag})
        return temp
    }


    return (
        <div>
            <div>
                <Delete callBack={handelDelete} />
                <Reset callBack={changeReset} />
            </div>
            <CheckBoxContainer flag={delAndFlag.flag} arrProp={arr.orginal} changeToDeleteCB={changeToDelete} />
        </div>
    )
}
