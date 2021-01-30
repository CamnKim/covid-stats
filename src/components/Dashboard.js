import React, { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import Map from "./Map"
import SideChart from "./SideChart"
import Linechart from "./Linechart"

function Dashboard({ mapData, leftData, lineData }) {
    const [mapMode, setMapMode] = useState("positive")

    const handeClick = event => {
        setMapMode(event.target.name)
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
                                    </div>
                                    <div className="lineParent">
                                        <Linechart lineData={lineData} />
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
                                            onClick={handeClick}
                                            name="positive">
                                            Positive
                                        </button>
                                        <button
                                            className="data-btn"
                                            onClick={handeClick}
                                            name="dead">
                                            Dead
                                        </button>
                                        <button
                                            className="data-btn"
                                            onClick={handeClick}
                                            name="ventilator">
                                            Ventilator
                                        </button>
                                        <button
                                            className="data-btn"
                                            onClick={handeClick}
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
