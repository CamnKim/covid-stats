import React from "react"

function SideChart({ leftData }) {
    const { positive, dead, ventilator, ICU, posInc, deadInc } = leftData
    return (
        <>
            <div>
                <p>Positive</p>
                <h1 className="stat">{positive.toLocaleString("en")}</h1>
            </div>
            <div>
                <p>Dead</p>
                <h1 className="stat">{dead.toLocaleString("en")}</h1>
            </div>
            <div>
                <p>People on a Ventilator</p>
                <h1 className="stat">{ventilator.toLocaleString("en")}</h1>
            </div>
            <div>
                <p>People in ICU</p>
                <h1 className="stat">{ICU.toLocaleString("en")}</h1>
            </div>
            <div>
                <p>New Cases Today</p>
                <h1 className="stat">{posInc.toLocaleString("en")}</h1>
            </div>
            <div>
                <p>New Deaths Today</p>
                <h1 className="stat">{deadInc.toLocaleString("en")}</h1>
            </div>
        </>
    )
}

export default SideChart
