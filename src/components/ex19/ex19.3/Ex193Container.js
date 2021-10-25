import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './search'
import "./style.css"

export default function Ex193Container() {

    const [fetchedData, setFetchedData] = useState([]);
    const [lodaing, setLoading] = useState(false);

    useEffect(() => {
        fetchDataFunc("hooks")
    }, [])

    const fetchDataFunc = (searchFor) => {
        setLoading(true);
        console.log(123);
        (async function () {
            await axios.get(`https://hn.algolia.com/api/v1/search?query=${searchFor}`)
                .then((res) => {
                    setFetchedData(res.data.hits)
                })
                .catch((err) => {
                    setFetchedData([{ title: "nothing was found" }])
                })
            setLoading(false);
            console.log(345);

        }())

    }

    const search = (searchText) => {
        setFetchedData([])
        fetchDataFunc(searchText)
    }

    const dataDisplay = fetchedData.map((val, i) => (
        <div key={i} style={{ fontSize: "1.4rem", margin: ".5rem" }}>
            <a href={val.url}>{val.title}</a>
        </div>
    ))

    return (
        <div>
            <h2>Angolia serch</h2>
            <Search searchCB={search} />
            <br />
            <br />
            <h2 style={{ marginTop: 0 }} className={lodaing?"loading":"none"}></h2>
            {dataDisplay}
        </div>
    )
}
