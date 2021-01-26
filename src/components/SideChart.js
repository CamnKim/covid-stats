import React from "react"
import { HorizontalBar } from "react-chartjs-2"

function SideChart({ leftData }) {
    const { positive, dead, ventilator, ICU, posInc, deadInc } = leftData
    return (
        <>
            <ul>
                <li>
                    <h2>Positive</h2>
                    <h1 className="stat">{positive.toLocaleString("en")}</h1>
                </li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>

            <h2>Dead</h2>
            <h1 className="stat">{dead.toLocaleString("en")}</h1>
            <h2>People on a Ventilator</h2>
            <h1 className="stat">{ventilator.toLocaleString("en")}</h1>
            <h2>People in ICU</h2>
            <h1 className="stat">{ICU.toLocaleString("en")}</h1>
            <h2>New Cases Today</h2>
            <h1 className="stat">{posInc.toLocaleString("en")}</h1>
            <h2>New Deaths Today</h2>
            <h1 className="stat">{deadInc.toLocaleString("en")}</h1>
        </>
    )
}

export default SideChart
