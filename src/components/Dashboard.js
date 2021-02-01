import React, { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import Map from "./Map"
import SideChart from "./SideChart"
import Linechart from "./Linechart"

function Dashboard({ mapData, leftData, lineData }) {
    const [mapMode, setMapMode] = useState("positive")
    const [lineMode, setLineMode] = useState("positive")

    const handeMapClick = event => {
        setMapMode(event.target.name)
    }

    const handeLineClick = event => {
        setLineMode(event.target.name)
    }

    const changeMap = () => {
        const { positive, dead, ventilator, icu } = mapData
        if (mapMode === "positive") {
            return [positive, "Cases"]
        } else if (mapMode === "dead") {
            return [dead, "Deaths"]
        } else if (mapMode === "ventilator") {
            return [ventilator, "On Ventilator"]
        } else if (mapMode === "icu") {
            return [icu, "Currently in ICU"]
        }
    }

    const changeLine = () => {
        const { positive, dead, ventilator, icu } = lineData
        if (lineMode === "positive") {
            return {
                label: "Positive",
                data: positive,
                fill: false,
                backgroundColor: "rgb(239, 39, 27)",
                borderColor: "rgba(239, 39, 27, 0.2)",
            }
        } else if (lineMode === "dead") {
            return {
                label: "Dead",
                data: dead,
                fill: false,
                backgroundColor: "rgb(64, 64, 64)",
                borderColor: "rgba(64, 64, 64, 0.2)",
            }
        } else if (lineMode === "ventilator") {
            return {
                label: "Ventilator",
                data: ventilator,
                fill: false,
                backgroundColor: "rgb(51, 51, 255)",
                borderColor: "rgba(51, 51, 255, 0.2)",
            }
        } else if (lineMode === "icu") {
            return {
                label: "ICU",
                data: icu,
                fill: false,
                backgroundColor: "rgb(255, 255, 0)",
                borderColor: "rgba(255, 255, 0, 0.2)",
            }
        }
    }

    return (
        <Container fluid className="parent">
            <Row>
                <Col md={4}>
                    <Container fluid>
                        <div className="leftContent">
                            <div className="leftSectionHeader">
                                <p>US National Statistics</p>
                            </div>
                            <div className="leftParent">
                                <SideChart leftData={leftData} />
                            </div>
                        </div>
                    </Container>
                </Col>
                <Col md={8}>
                    <Container fluid>
                        <Row>
                            <Col>
                                <div className="rightContent">
                                    <div className="sectionHeader">
                                        <p>US Statistics Over Time</p>
                                        <button
                                            className="data-btn"
                                            onClick={handeLineClick}
                                            name="positive">
                                            Positive
                                        </button>
                                        <button
                                            className="data-btn"
                                            onClick={handeLineClick}
                                            name="dead">
                                            Dead
                                        </button>
                                        <button
                                            className="data-btn"
                                            onClick={handeLineClick}
                                            name="ventilator">
                                            Ventilator
                                        </button>
                                        <button
                                            className="data-btn"
                                            onClick={handeLineClick}
                                            name="icu">
                                            ICU
                                        </button>
                                    </div>
                                    <div className="lineParent">
                                        <Linechart lineData={changeLine()} date={lineData.date} />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="rightContent">
                                    <div className="sectionHeader">
                                        <p>US State Statistics</p>
                                        <button
                                            className="data-btn"
                                            onClick={handeMapClick}
                                            name="positive">
                                            Positive
                                        </button>
                                        <button
                                            className="data-btn"
                                            onClick={handeMapClick}
                                            name="dead">
                                            Dead
                                        </button>
                                        <button
                                            className="data-btn"
                                            onClick={handeMapClick}
                                            name="ventilator">
                                            Ventilator
                                        </button>
                                        <button
                                            className="data-btn"
                                            onClick={handeMapClick}
                                            name="icu">
                                            ICU
                                        </button>
                                    </div>
                                    <div className="mapParent">
                                        <Map
                                            dataSet={changeMap()[0]}
                                            dataTitle={changeMap()[1]}
                                        />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default Dashboard
