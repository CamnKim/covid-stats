import React from "react"
import Chart from "react-google-charts"

function Map({ dataSet, dataTitle }) {
    return (
        <Chart
            height="100%"
            chartType="GeoChart"
            data={[["State", dataTitle], ...dataSet]}
            options={{
                region: "US",
                resolution: "provinces",
                backgroundColor: "#b3b3b3",
                colorAxis: { colors: ["#ffffff", "#670000"] },
                datalessRegionColor: "#b3b3b3",
                defaultColor: "#b3b3b3",
            }}
            mapsApiKey="AIzacSyBYadQAJXODEQRhsejrRKqq33u4ueKgDXU"
        />
    )
}

export default Map
