import React,{useState} from 'react'

export default function Search({searchCB}) {

    const [searchText,setSearchText]=useState("")

    return (
        <React.Fragment>
            <input type="text" value={searchText} placeholder="search" onChange={(e)=>setSearchText(e.target.value)}></input>
            <input type="submit" style={{cursor:"pointer"}} value="search" onClick={()=>{searchCB(searchText)}}/>
        </React.Fragment>
    )
}
