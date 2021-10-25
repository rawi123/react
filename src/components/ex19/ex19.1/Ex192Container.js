import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Ex192Container=()=>{

    const [fetched,setFetched]=useState([])

    useEffect(() => {
        (async function fetch(){
            const {data}=await axios.get("https://swapi.dev/api/films/1/")
            setFetched(data)
        }())
    }, [])


    return (
        <div>
            <h2>{fetched.title}</h2>
            <h3>{fetched.director}</h3>
        </div>
    )
}