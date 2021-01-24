import React, { useState, useEffect } from "react"
import Dashboard from "../components/Dashboard"

function US() {
    useEffect(() => {
        fetchMapData()
    }, [])

    const [isLoading, setLoading] = useState(true)
    const [mapDataSets, setMapData] = useState({})
    const [usData, setUSData] = useState([])

    const fetchMapData = async () => {
        setLoading(true)
        // api used to get US covid data, requires a cors proxy
        const corsProxy = "https://cors-anywhere.herokuapp.com/"
        const covidApiState = "https://covidtracking.com/api/states"
        const covidApiUS = "https://api.covidtracking.com/v1/us/current.json"

        // fetching state data from proxy
        const stateData = await fetch(corsProxy + covidApiState)
        const stateDataJson = await stateData.json()

        // storing the state data sets as arrays in an object
        setMapData({
            positive: stateDataJson.map(element => {
                const { state, positive } = element
                return [state, positive]
            }),

            dead: stateDataJson.map(element => {
                const { state, death } = element
                return [state, death]
            }),

            ventilator: stateDataJson.map(element => {
                const { state, onVentilatorCurrently } = element
                return [state, onVentilatorCurrently]
            }),

            icu: stateDataJson.map(element => {
                const { state, inIcuCurrently } = element
                return [state, inIcuCurrently]
            }),
        })

        const USData = await fetch(corsProxy + covidApiUS)
        const USDataJson = await USData.json()
        const USDataOBJ = USDataJson.pop()
        const {
            positive,
            inIcuCurrently,
            hospitalized,
            death,
            onVentilatorCurrently,
        } = USDataOBJ
        setUSData([
            positive,
            death,
            onVentilatorCurrently,
            hospitalized,
            inIcuCurrently,
        ])
        console.log(usData)

        setLoading(false)
    }

    return isLoading ? (
        <h1 className="loading">Loading...</h1>
    ) : (
        <Dashboard mapData={mapDataSets} />
    )
}

export default US
