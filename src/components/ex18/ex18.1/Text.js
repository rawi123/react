import React, { useState } from 'react'

export const Text = ({ textProp, maxLength }) => {
    // const [text,setText]=useState({
    //     fullText:textProp,
    //     showText:textProp.length>maxLength?textProp.substr(0,maxLength):textProp,
    //     clickableText:textProp.length>maxLength?"Show more":""
    // })
    // const changeShow=()=>{
    //     const tempObj={...text}
    //     if(text.clickableText==="Show more"){
    //         tempObj["showText"]=tempObj["fullText"]
    //         tempObj["clickableText"]="Show less"
    //         setText(tempObj)
    //     }
    //     else{
    //         tempObj["showText"]=tempObj["fullText"].substr(0,maxLength)
    //         tempObj["clickableText"]="Show more"
    //         setText(tempObj)
    //     }
    // }
    // return (
    //     <div>
    //         {text.showText}
    //         <span style={{cursor:"pointer", color:"blue"}} onClick={()=>changeShow()}> {text.clickableText}</span>
    //     </div>
    // )
    const [text,setText]=useState(textProp)
    const [flag,setFlag]=useState(textProp.length>maxLength)
    const changeShow=()=>{
        setFlag(!flag)
    }
    return (
        <div>
            {!flag?text:text.substr(0,maxLength)}
            <span style={{ cursor: "pointer", color: "blue", display:text.length<maxLength?"none":"unset" }} onClick={() => changeShow()}>{flag?"Show More":"Show less"}</span>
        </div>
    )
}
