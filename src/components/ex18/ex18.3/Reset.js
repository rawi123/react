import React from 'react'

export default function Reset({callBack}) {
    return (
        <>
            <input onClick={()=>callBack()} type="submit" value="Reset" style={{cursor:"pointer"}}/>
        </>
    )
}
