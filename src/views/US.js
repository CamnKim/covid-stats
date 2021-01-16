import React, { useState, useEffect } from "react"
import Dashboard from "../components/Dashboard"

function US() {
    useEffect(() => {
        fetchItems()
    }, [])

    const [isLoading, setLoading] = useState(true)
    const [dataSets, setData] = useState({})
    //const [dead, setDead] = useState([])

    const fetchItems = async () => {
        setLoading(true)
        // api used to get US covid data, requires a cors proxy
        const corsProxy = "https://cors-anywhere.herokuapp.com/"
        const covidApi = "https://covidtracking.com/api/states"

        // fetching data from proxy
        const data = await fetch(corsProxy + covidApi)
        const dataJson = await data.json()
        console.log(dataJson)

        // storing the data sets as arrays in an object
        setData({
            positive: dataJson.map(element => {
                const { state, positive } = element
                return [state, positive]
            }),

            dead: dataJson.map(element => {
                const { state, death } = element
                return [state, death]
            }),
        })
        setLoading(false)
    }

    return isLoading ? (
        <h1 className="loading">Loading...</h1>
    ) : (
        <Dashboard mapData={dataSets} />
    )
}
{
    /* <button onClick={event => handeClick("positive")}>Positive</button>
<button onClick={event => handeClick("dead")}>Dead</button>
<Map data={changeMap()} /> */
}

export default US
