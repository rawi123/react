import React,{useState} from 'react'

export default function Filter({onChangeHandel}) {
    const [val,setVal]=useState("")

    const handleChange=(e)=>{
        const searchInput=e.target.value
        setVal(searchInput)
        onChangeHandel(searchInput)
    }
    
    return (
        <div>
            <input type="text" placeholder="filter" value={val} onChange={(e)=>handleChange(e)} style={{marginTop:"1rem"}}></input>
        </div>
    )
}
