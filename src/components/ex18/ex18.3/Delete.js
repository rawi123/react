import React from 'react'

export default function Delete({callBack}) {
    return (
        <>
            <input type="submit" value="Delete" onClick={()=>callBack()} style={{cursor:"pointer"}}/>
        </>
    )
}
