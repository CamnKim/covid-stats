import React from "react"
import Chart from "react-google-charts"

function Map({ dataSet }) {
    return (
        <Chart
            height="100%"
            chartType="GeoChart"
            data={[["State", "Cases"], ...dataSet]}
            options={{
                region: "US",
                resolution: "provinces",
                backgroundColor: "#b3b3b3",
                colorAxis: { colors: ["#ffffff", "#670000"] },
            }}
            mapsApiKey="AIzacSyBYadQAJXODEQRhsejrRKqq33u4ueKgDXU"
        />
    )
}

export default Map
