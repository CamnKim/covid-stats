import React, { useState, useEffect } from "react"
import Dashboard from "../components/Dashboard"

function US() {
    useEffect(() => {
        fetchData()
    }, [])

    const [isLoading, setLoading] = useState(true)
    const [mapDataSets, setMapData] = useState({})

    // stored in this order: positive, dead, ventilator, ICU, new cases, new dead
    const [usData, setUSData] = useState({})

    const [usDaily, setUSDaily] = useState({})

    const fetchData = async () => {
        setLoading(true)
        // api used to get US covid data, requires a cors proxy
        const corsProxy = "https://cors-anywhere.herokuapp.com/"
        const covidApiState = "https://covidtracking.com/api/states"
        const covidApiUS = "https://api.covidtracking.com/v1/us/current.json"
        const covidUSDaily = "https://api.covidtracking.com/v1/us/daily.json"

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
            death,
            onVentilatorCurrently,
            positiveIncrease,
            deathIncrease,
        } = USDataOBJ
        let data = {
            positive: positive,
            dead: death,
            ventilator: onVentilatorCurrently,
            ICU: inIcuCurrently,
            posInc: positiveIncrease,
            deadInc: deathIncrease,
        }
        setUSData(data)

        // fetching US historical data
        const usHist = await fetch(corsProxy + covidUSDaily)
        const histDataJson = await usHist.json()

        setUSDaily({
            date: histDataJson.map(element => {
                const { date } = element
                let dateString = date.toString()
                const parsedDate = `${dateString.substring(
                    4,
                    6
                )}/${dateString.substring(6)}/${dateString.substring(0, 4)}`
                return parsedDate
            }).reverse(),

            positive: histDataJson.map(element => {
                const { positive } = element
                return positive
            }).reverse(),

            dead: histDataJson.map(element => {
                const { death } = element
                return death
            }).reverse(),

            ventilator: histDataJson.map(element => {
                const { onVentilatorCurrently } = element
                return onVentilatorCurrently
            }).reverse(),

            icu: histDataJson.map(element => {
                const { inIcuCurrently } = element
                return inIcuCurrently
            }).reverse(),
        })

        setLoading(false)
    }

    return isLoading ? (
        <h1 className="loading">Loading...</h1>
    ) : (
        <Dashboard mapData={mapDataSets} leftData={usData} lineData={usDaily} />
    )
}

export default US
