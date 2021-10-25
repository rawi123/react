import React,{useEffect,useState} from 'react'

export default function CheckBox({text,callBack,flag}) {

    const [checkedFlag,setCheckedFlag]=useState(false)

    useEffect(() => {
        if(flag){
            setCheckedFlag(false);
        }
    }, [flag])

    const handelClick=()=>{
        const temp=!checkedFlag
        setCheckedFlag(temp)
        callBack(text,temp)
    }

    return (
        <div>
            <input type="checkbox" checked={checkedFlag} onChange={()=>{
                handelClick()
            }}/>{text}
        </div>
    )
}
