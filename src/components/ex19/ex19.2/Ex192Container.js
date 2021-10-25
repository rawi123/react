import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Ex192Container() {
    const [textSearch, setTextSearch] = useState("")
    const [fetchedData, setFetchedData] = useState({ orginal: [], copy: [] })

    useEffect(() => {
        (async function () {
            const { data } = await axios.get("https://restcountries.com/v3.1/all")
            const dataNames = data.map(val => val.name.official)
            dataNames.sort()
            setFetchedData({ orginal: dataNames, copy: [...dataNames] })
        }())
    }, [])

    useEffect(() => {
        if (textSearch) {
            //other methods for search
            // {
            //method 1

            // const dataAfterFilter = fetchedData.copy.filter(val => {
            //     let temp = true;
            //     for (let i = 0; i < textSearch.length; i++) {
            //         if(val[i]){
            //             if (textSearch[i].toLowerCase() !== val[i].toLowerCase()) { temp = false }
            //         }
            //         else temp=false;
            //     }
            //     return temp
            // })//exact search

            //method 2

            // const dataAfterFilter = fetchedData.copy.filter(val => {
            //     let flag = true;
            //     textSearch.split("").map(letter => {
            //         if (!val.includes(letter))
            //             flag = false
            //     })
            //     return flag
            // })//includes dont care where

            //method 3
            // }
            
            const dataAfterFilter = fetchedData.copy.filter(val => val.toLowerCase().includes(textSearch.toLowerCase()))//includes search as a full letter

            setFetchedData({ orginal: dataAfterFilter, copy: fetchedData.copy })
        }
        else {
            setFetchedData({ orginal: [...fetchedData.copy], copy: fetchedData.copy })
        }
    }, [textSearch,fetchedData.copy])//can put it here since i never change it

    const displayData = fetchedData.orginal.map((val, i) => {
        return <li key={i}>{val}</li>
    })


    return (
        <div>
            <input type="text" placeholder="search" value={textSearch} onChange={(e) => setTextSearch(e.target.value)} />
            <ul>
                {displayData}
            </ul>
        </div>
    )
}
